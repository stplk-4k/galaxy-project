const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');
const cors = require('cors');
// const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const users = [];

app.use(cors({
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(bodyParser.json());

const db = new sqlite3.Database('./users.db', (err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Подключено к базе данных SQLite - пользователи');
});

const prod_db = new sqlite3.Database('./products.db', (err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Подключено к базе данных SQLite - продукты');
});

app.get('/api/product/:id', (req, res) => {
  const id = req.params.id;
  // console.log(`Fetching product with ID: ${id}`); // Логируем ID
  prod_db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
      if (err) {
          console.error("Database error:", err.message); // Логируем ошибку
          res.status(500).send(err.message);
      } else if (!row) {
          console.log(`No product found with ID: ${id}`); // Логируем отсутствие продукта
          res.status(404).send("Product not found");
      } else {
          console.log("Product found:", row); // Логируем найденный продукт
          res.json(row);
      }
  });
});


// app.get('/api/products/:id', (req, res) => {
//   const id = req.params.id;
//   prod_db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
//     if (err) {
//       res.status(500).send(err.message);
//       return;
//     }
//     if (!row) {
//       res.status(404).send('Продукт не найден');
//       return;
//     }
//     res.json(row);
//   });
// });

// const feedback_db = new sqlite3.Database('./feedback.db', (err) => {
//   if (err) {
//       console.error(err.message);
//   }
//   console.log('Подключено к базе данных SQLite - отзывы');
// });

app.post('/api/register', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
      db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, row) => {
          if (row) {
              return res.status(400).json({ message: 'Пользователь уже существует' });
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          db.run(`INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)`, 
              [name, username, email, hashedPassword], 
              function(err) {
                  if (err) {
                      console.error(err.message); 
                      return res.status(500).json({ message: 'Ошибка сервера' });
                  }
                  res.status(201).json({ message: 'Регистрация успешна', userId: this.lastID });
              });
      });
  } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Ошибка сервера' });
  }
});


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, user) => {
      if (!user) {
          return res.status(401).json({ message: 'Неверный логин или пароль' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
          return res.status(401).json({ message: 'Неверный логин или пароль' });
      }

      const token = jwt.sign({ id: user.id }, 'secret_key', { expiresIn: '1h' });
      res.json({ token });
  });
});

// app.get('/api/reviews', (req, res) => {
//   feedback_db.all('SELECT * FROM reviews', [], (err, rows) => {
//       if (err) {
//           res.status(500).json({ error: err.message });
//           return;
//       }
//       res.json(rows);
//   });
// });

// app.post('/api/reviews', (req, res) => {
//   const { name, review, gender, city, email, newsletter } = req.body;
//   const sql = 'INSERT INTO reviews (name, review, gender, city, email, newsletter) VALUES (?, ?, ?, ?, ?, ?)';
//   const params = [name, review, gender, city, email, newsletter];

//   feedback_db.run(sql, params, function(err) {
//       if (err) {
//           res.status(400).json({ error: err.message });
//           return;
//       }
//       res.status(201).json({ id: this.lastID });
//   });
// });


// let reviews = [];

// app.post('/api/reviews', (req, res) => {
//   const { name, review, gender, email, city } = req.body;
//   const newReview = { id: uuid.v4(), name, review, gender, email, city };
//   reviews.push(newReview);
//   res.json(newReview);
// });
// app.get('/api/reviews', (req, res) => {
//   res.json(reviews);
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});