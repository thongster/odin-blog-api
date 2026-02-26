import { prisma } from '../prisma/lib/prisma.js';
import { passport } from '../config/passport.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// get profile
const getProfile = async (req, res) => {
  console.log('req.user:', req.user);
  return res.json(req.user);
};

const getMyPostsWithComments = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      comments: true,
    },
  });

  if (allPosts.length === 0) {
    return res.status(404).json({ message: 'All posts not found' });
  }

  return res.json(allPosts);
};

export { getProfile, getMyPostsWithComments };
