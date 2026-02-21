import { Router } from 'express';
import { postsController } from '../controllers/postsController';
const posts = Router();

// view all posts
posts.get('/posts/');

// view post by id
posts.get('/posts/:postId');

// create post
posts.post('/posts');

// update post
posts.put('/posts/:postId');

// delete post
posts.delete('/posts/:postId');

export { posts };
