const prisma = require('../lib/prisma');

const getAllPosts = async (req, res) => {
  const allPosts = await prisma.post.findMany({
    where: {
      userId: req.user.id,
    },
  });

  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.postId,
    },
  });

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

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {};

export { getAllPosts, getPostById, createPost, updatePost, deletePost };

//   id        Int      @id @default(autoincrement())
//   title     String
//   content   String
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
//   published Boolean  @default(false)

//   user   User @relation(fields: [userId], references: [id])
//   userId Int

//   comments Comment[]
