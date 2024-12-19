const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const users = [];

app.use(cors({
  origin: 'http://localhost:8081',
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());


let cart = [];

app.post('/api/cart/add', (req, res) => {
  console.log('Request body:', req.body);
  const { productId, username } = req.body;

  console.log('Received:', { productId, username });

  if (!username) {
    return res.status(401).json({ message: 'Пользователь не авторизован' });
  }

  const existingItem = cart.find(item => item.productId === productId && item.username === username);
  if (existingItem) {
    return res.status(400).json({ message: 'Товар уже добавлен в корзину' });
  }

  cart.push({ productId, username });
  console.log('Cart after addition:', cart);
  res.status(200).json({ message: 'Товар добавлен в корзину' });
});

app.get('/api/cart/:username', (req, res) => {
  const { username } = req.params;

  const userCart = cart.filter(item => item.username === username);

  const productPromises = userCart.map(item => {
    return new Promise((resolve, reject) => {
      prod_db.get('SELECT * FROM products WHERE id = ?', [item.productId], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve({ ...item, ...row });
        }
      });
    });
  });

  Promise.all(productPromises)
    .then(products => {
      res.json(products);
    })
    .catch(err => {
      console.error("Ошибка при получении информации о товарах:", err);
      res.status(500).send("Ошибка при получении информации о товарах");
    });
});

app.delete('/api/cart/remove', (req, res) => {
  const { productId, username } = req.body;

  console.log('Request body for removal:', req.body);

  if (!username) {
    return res.status(401).json({ message: 'Пользователь не авторизован' });
  }

  const itemIndex = cart.findIndex(item => item.productId === productId && item.username === username);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Товар не найден в корзине' });
  }

  cart.splice(itemIndex, 1);
  console.log('Cart after removal:', cart);
  res.status(200).json({ message: 'Товар удален из корзины' });
});


app.delete('/api/cart/clear', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(401).json({ message: 'Пользователь не авторизован' });
  }

  // cart = [];
  cart = cart.filter(item => item.username !== username);
  console.log('Cart cleared for user:', username);

  res.status(200).json({ message: 'Корзина очищена' });
});


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
  prod_db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error("Database error:", err.message);
      res.status(500).send(err.message);
    } else if (!row) {
      console.log(`No product found with ID: ${id}`);
      res.status(404).send("Product not found");
    } else {
      console.log("Product found:", row);
      res.json(row);
    }
  });
});

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
        function (err) {
          if (err) {
            console.error(err.message);
            return res.status(500).json({ message: 'Ошибка сервера' });
          }
          const token = jwt.sign({ id: this.lastID }, 'secret_key', { expiresIn: '1h' });
          res.status(201).json({ message: 'Регистрация успешна', token });
          //   res.status(201).json({ message: 'Регистрация успешна', userId: this.lastID });
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

const feedback_db = new sqlite3.Database('./feedback.db', (err) => {
  if (err) {
      console.error(err.message);
  }
  console.log('Подключено к базе данных SQLite - отзывы');
});

app.post('/api/reviews', (req, res) => {
    const { name, review, gender, city, email, newsletter } = req.body;
    const sql = 'INSERT INTO reviews (name, review, gender, city, email, newsletter) VALUES (?, ?, ?, ?, ?, ?)';
    const params = [name, review, gender, city, email, newsletter];
  
    feedback_db.run(sql, params, function(err) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(201).json({ id: this.lastID });
    });
  });

  app.get('/api/reviews', (req, res) => {
  feedback_db.all('SELECT * FROM reviews', [], (err, rows) => {
      if (err) {
          res.status(500).json({ error: err.message });
          return;
      }
      res.json(rows);
  });
});

app.delete('/api/reviews/:id', (req, res) => {
  const { token } = req.body; // Получаем токен из тела запроса
  const reviewId = req.params.id; // Получаем ID отзыва из параметров

  // Проверка токена (можно использовать вашу логику проверки)
  if (!token) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
  }

  // SQL-запрос для удаления отзыва
  const sql = 'DELETE FROM reviews WHERE id = ?';
  
  feedback_db.run(sql, [reviewId], function(err) {
      if (err) {
          return res.status(400).json({ error: err.message });
      }
      
      if (this.changes === 0) {
          return res.status(404).json({ message: 'Отзыв не найден' });
      }

      res.status(200).json({ message: 'Отзыв успешно удален' });
  });
});


// let reviews = [];

// app.post('/api/reviews', (req, res) => {
//   const { name, review, gender, email, city } = req.body; 


//   if (!name || !review || !city) {
//       return res.status(400).json({ message: 'Все поля обязательны для заполнения.' });
//   }

//   const sql = 'INSERT INTO reviews (name, review, gender, city, email, newsletter) VALUES (?, ?, ?, ?, ?, ?)'
//   feedback_db.run(sql, [name, review, gender, city, email, newsletter], function(err) {
//         if (err) {
//             return res.status(500).json({ message: 'Ошибка при сохранении отзыва.' });
//         }
//         // Возвращаем новый отзыв с его ID
//         const newReview = { id: this.lastID, name, review, gender, email, city };
//         res.status(201).json(newReview);
//     });
// });


  // const newReview = { id: Date.now(), name, review, gender, email, city }; 
  // reviews.push(newReview); 

  // res.status(201).json(newReview); 
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


// const services = [
//   { id: 'product-amm', name: '«Галактика AMM»', description: 'Постройте прибыльный и эффективный производственный процесс на любом предприятии' },
//   { id: 'product-cpm', name: '«Галактика CPM»', description: 'Достигайте совершенства в управлении финансами и принимайте решения в режиме реального времени' },
//   { id: 'product-eam', name: '«Галактика EAM»', description: 'Снижайте стоимость владения активами и сокращайте затраты на их восстановление' },
//   { id: 'product-erp', name: '«Галактика ERP»', description: 'Эффективно решайте текущие и стратегические управленческие задачи современного предприятия' },
//   { id: 'product-ecm', name: '«Галактика ECM»', description: 'Управляйте документами и корпоративной информацией' },
//   { id: 'product-esb', name: '«Галактика ESB»', description: 'Получайте все бизнес-данные в едином информационном пространстве' },
//   { id: 'product-mes', name: '«Галактика MES»', description: 'Реализуйте планирование по операциям и диспетчеризацию внутри производственных подразделений' },
//   { id: 'product-vuz', name: '«Галактика ВУЗ»', description: 'Управляйте учебным процессом и научной деятельностью университета' },
//   { id: 'product-elms', name: '«Галактика eLMS»', description: 'Организуйте сквозной процесс обучения с возможностью интеграции с уже существующими системами' },
//   { id: 'product-ruz', name: '«Галактика РУЗ»', description: 'Эффективно управляйте ресурсами вуза. Экономьте время при подготовке расписания учебных занятий' },
// ];

// app.post('/api/search-services', (req, res) => {
//   const searchString = req.body.searchString.toLowerCase();
//   const filteredServices = services.filter(service => {
//       return service.name.toLowerCase().includes(searchString) || 
//              service.description.toLowerCase().includes(searchString);
//   });
//   res.json(filteredServices);
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });

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