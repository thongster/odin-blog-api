import { Router } from 'express';
import { postsController } from '../controllers/postsController';
const posts = Router();

// view all posts
posts.get('/');

// view post by id
posts.get('/:postId');

// create post
posts.post('/');

// update post
posts.put('/:postId');

// delete post
posts.delete('/:postId');

export { posts };
