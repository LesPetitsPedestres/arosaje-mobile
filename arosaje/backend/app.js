const express = require('express');
var cookieSession = require('cookie-session')
const cors = require('cors');
const usersRouter = require('./users');
const plantsRouter = require('./plants');
const advicesRouter= require('./advices');
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('../database/arosaje.db');

const corsOption = {
  origin: 'http://localhost:8100',
  credentials: true
}

const app = express();
app.use(cors(corsOption));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cookieSession({
  name: 'session',
  keys: ['3qQcV7fwzyeM6JyUq3qQcV7fwzyeM6JyUq'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// Utiliser l'Endpoint des utilisateurs
app.use('', usersRouter);
app.use('', plantsRouter);
app.use('', advicesRouter);


app.use((req, res, next) => {
  if (req.session && req.session.userId) {
    db.get('SELECT * FROM users WHERE id = ?', [req.session.userId], (err, row) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Erreur serveur');
      }
      if (!row) {
        return res.status(401).send('Utilisateur non trouvé');
      }
      req.user = row;
      next();
    });
  } else {
    next();
  }
});

// Endpoint de Connexion
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Rechercher l'utilisateur dans la base de données
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (!user) {
      return res.status(401).send('Adresse e-mail ou mot de passe incorrect');
    }

    // Vérifier le mot de passe
    // const isPasswordValid = await bcrypt.compare(password, user.password);

    // if (!isPasswordValid) {
    //   return res.status(401).send('Adresse e-mail ou mot de passe incorrect');
    // }

    // Connecter l'utilisateur en créant une session
    req.session.userId = user.id;
    console.log(req.session.userId)
    // return res.status(200).json({ id: user.id });
    return res.status(200).send('Vous êtes maintenant connecté');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Erreur serveur');
  }
});


// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});

