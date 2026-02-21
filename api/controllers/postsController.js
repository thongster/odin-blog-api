const prisma = require('../lib/prisma');

const getAllPosts = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.user.id,
    },
  });

  if (!allPosts) {
    return res.status(404).json({ message: 'All posts not found' });
  }

  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.postId,
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  return res.status(200).json(post);
};

const createPost = async (req, res) => {
  const newPost = await prisma.post.create({
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
      userId: req.user.id,
    },
  });

  return res.status(201).json(newPost);
};

const updatePost = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(req.params.postId),
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (post.userId != Number(req.user.id)) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const updatedPost = await prisma.post.update({
    where: {
      id: req.params.postId,
    },
    data: {
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
    },
  });

  return res.status(200).json(updatedPost);
};

const deletePost = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(req.params.postId),
    },
  });

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (post.userId != req.user.id) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  await prisma.post.delete({
    where: {
      id: req.params.postId,
    },
  });

  return res.status(204).send;
};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };
