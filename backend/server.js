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
  console.log('Подключено к базе данных SQLite.');
});

// db.run(`CREATE TABLE IF NOT EXISTS users (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   name TEXT,
//   username TEXT UNIQUE,
//   email TEXT UNIQUE,
//   password TEXT
// )`);

app.post('/api/register', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
      // Проверка существования пользователя
      db.get(`SELECT * FROM users WHERE username = ?`, [username], async (err, row) => {
          if (row) {
              return res.status(400).json({ message: 'Пользователь уже существует' });
          }

          // Хеширование пароля
          const hashedPassword = await bcrypt.hash(password, 10);
          db.run(`INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)`, 
              [name, username, email, hashedPassword], 
              function(err) {
                  if (err) {
                      console.error(err.message); // Вывод ошибки в консоль
                      return res.status(500).json({ message: 'Ошибка сервера' });
                  }
                  res.status(201).json({ message: 'Регистрация успешна', userId: this.lastID });
              });
      });
  } catch (error) {
      console.error(error); // Вывод ошибки в консоль
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
// const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'users_db',
// });

// app.post('/api/register', async (req, res) => {
//   const { username, password, email } = req.body;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
//   try {
//     const [results] = await db.execute(query, [username, hashedPassword, email]);
//     res.json({ message: 'Пользователь успешно зарегистрирован' });
//   } catch (err) {
//     res.status(400).json({ message: 'Пользователь с таким именем уже существует' });
//   }
// });

// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM users WHERE username = ?';
//   try {
//     const [results] = await db.execute(query, [username]);
//     if (results.length === 0) {
//       res.status(401).json({ message: 'Неправильный логин или пароль' });
//     } else {
//       const isValidPassword = await bcrypt.compare(password, results[0].password);
//       if (!isValidPassword) {
//         res.status(401).json({ message: 'Неправильный логин или пароль' });
//       } else {
//         const token = jwt.sign({ userId: results[0].id, username: results[0].username }, 'secretkey', { expiresIn: '1h' });
//         res.json({ token });
//       }
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Ошибка сервера' });
//   }
// });

let reviews = [];

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