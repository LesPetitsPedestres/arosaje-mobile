const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database("./arosaje.db");

// Endpoint pour récupérer toutes les plantes
router.get("/plants", (req, res) => {
  db.all("SELECT * FROM plants", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(rows);
  });
});

// Endpoint pour récupérer les plantes d'un propriétaire
router.get("/plants/:ownerId", (req, res) => {
  const ownerId = req.params.ownerId;

  db.all(
    `SELECT plants.*, users.name as owner_name, users.firstname FROM plants INNER JOIN users ON plants.owner_id = users.id WHERE plants.owner_id = '${ownerId}'`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur serveur");
      }
      res.json(rows);
    }
  );
});

// Endpoint pour récupérer le détail d'une plante par son ID
router.get("/plant-details/:plantId", (req, res) => {
  const plantId = req.params.plantId;

  db.get(
    `SELECT plants.*, users.firstname, users.name as owner_name, users.role FROM plants
          JOIN users ON plants.owner_id = users.id
            WHERE plants.id = ${plantId}`,
    (err, rows) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Erreur serveur");
      }
      res.json(rows);
    }
  );
});

// Endpoint Update le détail de la plante (seulement pour le owner)
router.put("/plant-details/:id", (req, res) => {
  const { name, species, address, photo_path } = req.body;
  const plantID = req.params.id;

  const sql = `UPDATE plants SET name = ?, species = ?, address = ?, photo_path = ? WHERE id = ?`;
  const params = [name, species, address, photo_path, plantID];
  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({
          message:
            "Une erreur est survenue lors de la mise à jour de la plante",
        });
    }

    return res.status(200).json({ message: "Plante mis à jour avec succès" });
  });
});

// Endpoint ajout d'une plante
router.post("/plant-details/:ownerID", (req, res) => {
  const { name, species, address, photo_path } = req.body;
  const owner_id = req.params.ownerID;

  const sql = `INSERT INTO plants (name, species, address, photo_path, owner_id) VALUES (?, ?, ?, ?, ?)`;
  const params = [name, species, address, photo_path, owner_id];

  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res
        .status(500)
        .json({
          message: "Une erreur est survenue lors de la création de la plante",
        });
    }

    return res.status(201).json({ message: "Plante créée avec succès" });
  });
});

module.exports = router;
