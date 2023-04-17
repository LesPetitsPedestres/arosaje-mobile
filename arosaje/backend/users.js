const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('../database/arosaje.db');

// Endpoint pour récupérer tous les utilisateurs
router.get('/users/:id', (req, res) => {
  const userId = req.params.id

  db.get(`SELECT * FROM users WHERE id = ${userId}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    if (!rows) {
      return res.status(404).send('Utilisateur non trouvé');
    }
    res.json(rows);
  });
});

module.exports = router;
