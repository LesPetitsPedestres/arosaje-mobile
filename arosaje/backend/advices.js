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

// Endpoint ajout d'un conseil sur une plante
router.post('/advices/:botanistID/:plantID', (req, res) => {
  const { title, content, } = req.body;
  const botanist_id = req.params.botanistID;
  const plant_id = req.params.plantID;

  const sql = `INSERT INTO advices (title, content, botanist_id, plant_id) VALUES (?, ?, ?, ?)`;
  const params = [title, content, botanist_id, plant_id];

  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Une erreur est survenue lors de la création du conseil' });
    }

    return res.status(201).json({ message: 'Conseil créée avec succès' });
  });
});

// Endpoint modif d'un conseil sur une plante
router.post('/advices/:botanistID/:plantID/:adviceID', (req, res) => {
  const { title, content, } = req.body;
  const botanist_id = req.params.botanistID;
  const plant_id = req.params.plantID;
  const advice_id = req.params.adviceID;

  const sql = `UPDATE plants SET title = ?, content = ?, botanist_id = ?, plant_id = ? WHERE id = ?`;
  const params = [title, content, botanist_id, plant_id, advice_id];

  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Une erreur est survenue lors de la création du conseil' });
    }

    return res.status(201).json({ message: 'Conseil créée avec succès' });
  });
});

// Endpoint Supression d'un conseil sur une plante
router.post('/advices/:adviceID', (req, res) => {
  const adviceID = req.params.adviceID;

  const sql = `DELETE FROM advices WHERE id = ?`;
  const params = [adviceID];

  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'Une erreur est survenue lors de la suppression du conseil' });
    }

    return res.status(201).json({ message: 'Conseil supprimé avec succès' });
  });
});

module.exports = router;