import { Router } from 'express';
import { commentsController } from '../controllers/commentsController.js';
const comments = Router();

// view all comments
comments.get('/');

// view comment  by id
comments.get('/:commentId');

// create comment
comments.post('/');

// update comment
comments.put('/:commentId');

// delete comment
comments.delete('/:commentId');

export { comments };
