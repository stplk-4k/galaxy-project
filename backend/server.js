const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');

let reviews = [];

app.use(express.json());

app.post('/api/reviews', (req, res) => {
  const { name, review, gender, email, city } = req.body;
  const newReview = { id: uuid.v4(), name, review, gender, email, city };
  reviews.push(newReview);
  res.json(newReview);
});

app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});