import { Router } from 'express';
import { passport } from './config/passport';
import { postsController } from '../controllers/postsController';
const posts = Router();

// get all posts
posts.get('/');

// get post by id
posts.get('/:postId');

// create post
posts.post('/', passport.authenticate('jwt', { session: false }));

// update post
posts.put('/:postId', passport.authenticate('jwt', { session: false }));

// delete post
posts.delete('/:postId', passport.authenticate('jwt', { session: false }));

export { posts };
