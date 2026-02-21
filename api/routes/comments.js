import { Router } from 'express';
import { passport } from './config/passport';
import {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
} from '../controllers/commentsController.js';
const comments = Router();

// view all comments
comments.get('/', getAllComments);

// view comment  by id
comments.get('/:commentId', getCommentById);

// create comment
comments.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  createComment,
);

// update comment
comments.put(
  '/:commentId',
  passport.authenticate('jwt', { session: false }),
  updateComment,
);

// delete comment
comments.delete(
  '/:commentId',
  passport.authenticate('jwt', { session: false }),
  deleteComment,
);

export { comments };
