import { Router } from 'express';
import { passport } from '../config/passport.js';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../controllers/postsController.js';
const posts = Router();

// get all posts
posts.get('/', getAllPosts);

// get post by id
posts.get('/:postId', getPostById);

// create post
posts.post('/', passport.authenticate('jwt', { session: false }), createPost);

// update post
posts.put(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  updatePost,
);

// delete post
posts.delete(
  '/:postId',
  passport.authenticate('jwt', { session: false }),
  deletePost,
);

export { posts };
