const express = require('express');
const usersRouter = require('./users');

const app = express();

// Utiliser l'Endpoint des utilisateurs
app.use('/users', usersRouter);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});
