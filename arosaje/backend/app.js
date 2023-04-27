const express = require('express');

const session = require('express-session');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const usersRouter = require('./users');
const plantsRouter = require('./plants');
const advicesRouter= require('./advices');
const bodyParser = require('body-parser');
// const bcrypt = require('bcrypt');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/arosaje.db');

// const corsOption = {
//   origin: 'http://localhost:8100',
//   credentials: true
// }

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use(session({
//   secret: '3qQcV7fwzyeM6JyUq3qQcV7fwzyeM6JyUq',
//   resave: false,
//   saveUninitialized: true,
// }));

// Utiliser l'Endpoint des utilisateurs
app.use('', usersRouter);
app.use('', plantsRouter);
app.use('', advicesRouter);

// Endpoint de Connexion
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.get(`SELECT * FROM users WHERE email = ? AND password = ?`, [email, password], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Erreur serveur' });
    }
    if (!row) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }
    res.cookie('userId', row.ID);
    console.log(req.cookies);
    res.json({ userId: row.ID });
  });
});

// Endpoint d'Inscription
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err) => {
    if (err) {
      res.status(500).send('Une erreur est survenue lors de la création du compte');
    } else {
      res.status(200).send('Le compte a été créé avec succès');
    }
  });
});

// Endpoint de déconnexion
app.post('/logout', (req, res) => {
  req.session.destroy();
  res.status(200).send('Vous êtes maintenant déconnecté');
});


// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});

