import 'dotenv/config';
import prisma from './prisma/lib/prisma.js';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import routers
const indexRouter = require('./routes/indexRouter');

// passport
const passport = require('./config/passport');

// error handling
app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1>');
  //   res.status(404).render("404");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('<h1>Error 500</h1>');
  //   res.status(500).render("500");
});

// Start server
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on port ${PORT}!`);
});
