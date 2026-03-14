import "dotenv/config";
import express from "express";
import { auth } from "./routes/auth.js";
import { profile } from "./routes/profile.js";
import { posts } from "./routes/posts.js";
import { comments } from "./routes/comments.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());

// allow cross origin
app.use(
  cors((req, callback) => {
    const origin = req.header("Origin");
    let options = { credentials: true };

    if (origin === process.env.PUBLIC_ORIGIN) {
      options.origin = true;
      options.methods = ["GET"];
    } else if (origin === process.env.ADMIN_ORIGIN) {
      options.origin = true;
      options.methods = ["GET", "POST", "PUT", "DELETE"];
    } else {
      options.origin = false; // Block others
    }

    callback(null, options);
  }),
);

// use  routers
app.use("/", auth);
app.use("/profile", profile);
app.use("/posts", posts);
app.use("/posts/:postId/comments", comments);

// error handling
app.use((req, res) => {
  res.status(404).send("<h1>Error 404</h1>");
});

app.use((err, req, res, next) => {
  res.status(500).send("<h1>Error 500</h1>");
});

// Start server
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on port ${PORT}!`);
});
