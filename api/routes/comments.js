import { Router } from 'express';
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
comments.post('/', createComment);

// update comment
comments.put('/:commentId', updateComment);

// delete comment
comments.delete('/:commentId', deleteComment);

export { comments };
