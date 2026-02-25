import { Router } from 'express';
import { passport } from '../config/passport.js';
import {
  validateSignUp,
  validateLogin,
  signup,
  login,
  profile,
} from '../controllers/authController.js';
const auth = Router();

auth.post('/login', validateLogin, login);
auth.post('/signup', validateSignUp, signup);
auth.get('/profile', passport.authenticate('jwt', { session: false }), profile);

export { auth };
