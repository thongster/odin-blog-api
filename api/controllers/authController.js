const prisma = require('../lib/prisma');
const passport = require('../config/passport');
const bcrypt = require('bcryptjs');

// express validator
import { body, validationResult, matchedData } from 'express-validator';

const validateSignUp = [
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
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6, max: 100 })
    .withMessage('Password must be at least 6 characters'),
  body('confirmpassword')
    .notEmpty()
    .withMessage('Password confirmation is required')
    .bail()
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('Passwords do not match'),
  body('firstname'),
];

const validateLogin = [
  body('email')
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage('Must be a valid email address')
    .normalizeEmail()
    .isLength({ max: 255 })
    .withMessage('Email is too long'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6, max: 100 })
    .withMessage('Password must be at least 6 characters'),
];
