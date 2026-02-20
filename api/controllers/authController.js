import prisma from '../lib/prisma';
import passport from '../config/passport';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// express validator
import { body, validationResult, matchedData } from 'express-validator';

const validateSignUp = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3, max: 25 })
    .withMessage('Username must be between 3 and 25 characters')
    .matches(/^[a-zA-Z0-9_]+$/)
    .withMessage('Username can only contain letters, numbers, and underscores'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Must be a valid email address')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('Email is too long'),

  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must be between 6 and 100 characters'),

  body('confirmPassword')
    .trim()
    .notEmpty()
    .withMessage('Password confirmation is required')
    .custom((value, { req }) => value === req.body.password)
    .withMessage('Passwords do not match'),

  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required')
    .isLength({ min: 2, max: 25 })
    .withMessage('First name must be between 2 and 25 characters'),

  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required')
    .isLength({ min: 2, max: 25 })
    .withMessage('Last name must be between 2 and 25 characters'),
];

const validateLogin = [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 3, max: 25 })
    .withMessage('Username must be between 3 and 25 characters'),

  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 8, max: 100 })
    .withMessage('Password must be between 8 and 100 characters'),
];

const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: errors.array(),
    });
  }

  passport.authenticate('local', (err, user, info) => {
    // if database error or server fail
    if (err) {
      return next(err);
    }

    // if user does not match
    if (!user) {
      return res.status(401).json({
        status: [{ msg: info?.message || 'Invalid username or password' }],
      });
    }
  })(req, res, next);
};

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: errors.array(),
    });
  }

  const { username, email, password, firstName, lastName } = matchedData(req);

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        passwordHash: hashedPassword,
        firstName: firstName,
        lastName: lastName,
      },
    });

    const payload = {
      id: newUser.id,
    };

    // assign json web token
    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return res.status(201).json({
      token: jwtToken,
    });
  } catch (error) {
    // prisma error with uniques
    if (error.code === 'P2002') {
      return res.status(400).json({
        status: [{ msg: 'Username or email already in use.' }],
      });
    }

    console.error(error);
    return res.status(500).json({
      status: [{ msg: 'Something went wrong. Please try again.' }],
    });
  }
};

export { validateSignUp, validateLogin, signup, login };
