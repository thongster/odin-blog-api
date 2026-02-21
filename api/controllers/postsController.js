const prisma = require('../lib/prisma');

const getAllPosts = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.userId,
    },
  });

  return res.json(allPosts);
};

const getPostById = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.postId,
    },
  });

  return res.json(post);
};

const createPost = async (req, res) => {};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
