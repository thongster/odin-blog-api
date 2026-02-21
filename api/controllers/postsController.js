const prisma = require('../lib/prisma');

const getAllPosts = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.userId,
    },
  });
};

const getPostById = async (req, res) => {};

const createPost = async (req, res) => {};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
