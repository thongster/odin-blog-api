import { prisma } from '../prisma/lib/prisma.js';

// get profile
const getProfile = async (req, res) => {
  console.log('req.user:', req.user);
  return res.json(req.user);
};

const getPosts = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      comments: false,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (allPosts.length === 0) {
    return res.status(404).json({ message: 'My posts not found' });
  }

  return res.json(allPosts);
};

const getMyPostsWithComments = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      comments: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (allPosts.length === 0) {
    return res.status(404).json({ message: 'My posts and comments not found' });
  }

  return res.json(allPosts);
};

export { getProfile, getPosts, getMyPostsWithComments };
