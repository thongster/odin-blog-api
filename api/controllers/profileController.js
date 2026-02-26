import { prisma } from '../prisma/lib/prisma.js';
import { passport } from '../config/passport.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// get profile
const getProfile = async (req, res) => {
  console.log('req.user:', req.user);
  return res.json(req.user);
};

export { getProfile };
