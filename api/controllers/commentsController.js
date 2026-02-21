import { comments } from '../routes/comments';

const prisma = require('../lib/prisma');

const getAllComments = async (req, res) => {
  const postWithComments = await prisma.post.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      comments: true,
    },
  });

  if (!postWithComments) {
    return res.status(404).json({ message: 'Post not found' });
  }

  return res.status(200).json(postWithComments);
};

const getCommentById = async (req, res) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(req.params.commentId),
      postId: Number(req.params.postId),
    },
  });

  if (!comment) {
    return res.status(404).json({ message: 'Post not found' });
  }

  return res.status(200).json(comment);
};

const createComment = async (req, res) => {
  const newComment = await prisma.comment.create({
    data: {
      text: req.body.text,
      userId: req.user.id,
      postId: Number(req.params.postId),
    },
  });

  return res.status(201).json(newComment);
};

const updateComment = async (req, res) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id: Number(req.params.commentId),
    },
  });

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  if (comment.userId != Number(req.user.id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const updatedComment = await prisma.comment.update({
    where: {
      id: Number(comment.id),
    },
    data: {
      text: req.body.text,
    },
  });

  return res.status(200).json(updatedComment);
};

const deleteComment = async (req, res) => {
  const comment = await prisma.comment.findFirst({
    where: {
      id: Number(req.params.commentId),
      postId: Number(req.params.postId),
    },
  });

  if (!comment) {
    return res.status(404).json({ message: 'Comment not found' });
  }

  if (comment.userId != req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  await prisma.comment.delete({
    where: {
      id: Number(comment.id),
    },
  });

  return res.status(204).send();
};

export {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
