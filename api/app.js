import 'dotenv/config';
import prisma from './prisma/lib/prisma.js';
import express from 'express';
import { passport } from './config/passport';
import { auth } from './routes/auth.js';
import { posts } from './routes/posts.js';
import { comments } from './routes/comments.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// use  routers
app.use('/', auth);
app.use('/posts', posts);
app.use('/posts/:postId/comments', comments);

// error handling
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1>');
});

app.use((err, req, res, next) => {
  res.status(500).send('<h1>Error 500</h1>');
});

// Start server
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on port ${PORT}!`);
});
