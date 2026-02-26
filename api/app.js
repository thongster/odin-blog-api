import 'dotenv/config';
import { prisma } from './prisma/lib/prisma.js';
import express from 'express';
// import { passport } from './config/passport';
import { auth } from './routes/auth.js';
import { profile } from './routes/profile.js';
import { posts } from './routes/posts.js';
import { comments } from './routes/comments.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// allow cross origin
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

// use  routers
app.use('/', auth);
app.use('/profile', profile);
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
