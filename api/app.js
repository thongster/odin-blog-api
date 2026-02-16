import express from 'express';

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});