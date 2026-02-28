import { Router } from 'express';
import { passport } from '../config/passport.js';
import {
  getProfile,
  getPosts,
  getMyPostsWithComments,
} from '../controllers/profileController.js';
const profile = Router();

profile.get('/', passport.authenticate('jwt', { session: false }), getProfile);
profile.get(
  '/posts',
  passport.authenticate('jwt', { session: false }),
  getPosts,
);
profile.get(
  '/postswithcomments',
  passport.authenticate('jwt', { session: false }),
  getMyPostsWithComments,
);

export { profile };
