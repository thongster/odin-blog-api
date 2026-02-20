import { Router } from 'express';
import {
  validateSignUp,
  validateLogin,
  signup,
  login,
} from '../controllers/authController.js';
const auth = Router();

auth.post('/login', validateLogin, login);

export { auth };
