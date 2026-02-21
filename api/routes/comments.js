import { Router } from 'express';
import { commentsController } from '../controllers/commentsController.js';
const comments = Router();

// view all comments
comments.get('/posts/:postId/comments');

// view comment  by id
comments.get('/posts/:postId/comments/:commentId');

// create comment
comments.post('/posts/:postId/comments/');

// update comment
comments.put('/posts/:postId/comments/:commentId');

// delete comment
comments.delete('/posts/:postId/comments/:commentId');

export { comments };
