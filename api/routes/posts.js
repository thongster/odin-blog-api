import { Router } from 'express';
import { postsController } from '../controllers/postsController';
const posts = Router();

// get all posts
posts.get('/');

// get post by id
posts.get('/:postId');

// create post
posts.post('/');

// update post
posts.put('/:postId');

// delete post
posts.delete('/:postId');

export { posts };
