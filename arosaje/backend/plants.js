const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('../database/arosaje.db');

// Endpoint pour récupérer tous les utilisateurs
router.get('/', (req, res) => {
  db.all('SELECT * FROM plants', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    res.json(rows);
  });
});

module.exports = router;
