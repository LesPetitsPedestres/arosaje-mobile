const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const bcrypt = require('bcrypt');

const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('../database/arosaje.db');

// Endpoint pour récupérer tous les utilisateurs
router.get('/users/:userId', (req, res) => {
  const userId = req.session.userId

  if (!userId) {
    return res.status(401).send('Vous n\'êtes pas connecté');
  }

  db.get(`SELECT * FROM users WHERE id = ${userId}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    if (!rows) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.json(rows);
    console.log(userId)
  });
});

// Endpoint Update profil user

module.exports = router;
