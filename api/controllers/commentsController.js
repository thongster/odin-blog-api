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

const getCommentById = async (req, res) => {};

const createComment = async (req, res) => {};

const updateComment = async (req, res) => {};

const deleteComment = async (req, res) => {};

export {
  getAllComments,
  getCommentById,
  createComment,
  updateComment,
  deleteComment,
};
