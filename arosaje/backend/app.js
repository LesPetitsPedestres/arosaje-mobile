const express = require('express');
const cors = require('cors');
const usersRouter = require('./users');
const plantsRouter = require('./plants');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// Utiliser l'Endpoint des utilisateurs
app.use('', usersRouter);
app.use('', plantsRouter);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});
