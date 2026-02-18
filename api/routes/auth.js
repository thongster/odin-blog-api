import { Router } from 'express';
import { authController } from '../controllers/authController';
const auth = Router();

auth.get(
  '/profile',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({ user: req.user });
  },
);

export { auth };
