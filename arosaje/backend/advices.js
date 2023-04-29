const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database('../database/arosaje.db');

// Endpoint pour récupérer tous les conseils d'une plante
router.get('/advices/:plantID', (req, res) => {
    const plantID = req.params.plantID;

    db.all(`SELECT advices.*, plants.name as plant_name, users.name as botanist_name, users.firstname as botanist_firstname
    FROM advices 
      INNER JOIN plants ON advices.plant_id = plants.id 
      INNER JOIN users ON advices.botanist_id = users.id 
      WHERE advices.plant_id = ${plantID}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Erreur serveur');
    }
    res.json(rows);
    }); 
});

module.exports = router;