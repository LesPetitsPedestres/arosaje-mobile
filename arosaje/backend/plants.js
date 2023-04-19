const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('../database/arosaje.db');

// Endpoint pour récupérer toutes les plantes
router.get('/plants', (req, res) => {
  db.all('SELECT * FROM plants', (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    res.json(rows);
  });
});

// Endpoint pour récupérer les plantes d'un propriétaire
router.get('/plants/:ownerId', (req, res) => {
  const ownerId = req.params.ownerId;

  db.all(`SELECT plants.*, users.name as owner_name, users.firstname FROM plants INNER JOIN users ON plants.owner_id = users.id WHERE plants.owner_id = ${ownerId}`, (err, rows) => {
  if (err) {
    console.error(err.message);
    return res.status(500).send('Erreur serveur');
  }
  res.json(rows);
  });
});

// Endpoint pour récupérer le détail d'une plante par son ID
router.get('/plant-details/:plantId', (req, res) => {
  const plantId = req.params.plantId;

  db.get(`SELECT plants.*, users.firstname, users.name as owner_name, users.role FROM plants
          JOIN users ON plants.owner_id = users.id
            WHERE plants.id = ${plantId}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    res.json(rows);
    }); 
});

module.exports = router;
