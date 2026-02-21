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
posts.post('/posts/:postId');

// delete post
posts.post('/posts/:postId');

export { posts };
