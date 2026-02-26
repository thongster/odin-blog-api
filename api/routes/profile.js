import { Router } from 'express';
import { passport } from '../config/passport.js';
import { getProfile } from '../controllers/profileController.js';
const profile = Router();

profile.get('/', passport.authenticate('jwt', { session: false }), getProfile);

export { profile };
