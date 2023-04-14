const express = require('express');
const cors = require('cors');
const usersRouter = require('./users');
const plantsRouter = require('./plants')

const app = express();
app.use(cors());

// Utiliser l'Endpoint des utilisateurs
app.use('/users', usersRouter);
app.use('/plants', plantsRouter);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});
