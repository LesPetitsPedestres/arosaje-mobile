const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const router = express.Router();

// Ouvrir la connexion à la base de données
const db = new sqlite3.Database("./arosaje.db");

// Endpoint pour récupérer tous les utilisateurs
router.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  if (!userId) {
    return res.status(401).send("Vous n'êtes pas connecté");
  }

  db.get(`SELECT * FROM users WHERE id = ${userId}`, (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Erreur serveur");
    }
    if (!rows) {
      return res.status(404).send("Utilisateur non trouvé");
    }

    res.json(rows);
  });
});

// Endpoint Update profil user
router.put("/users/:userId", (req, res) => {
  const { name, firstame, phone, email, password } = req.body;
  const userId = req.params.userId;

  const sql = `UPDATE plants SET name = ?, firstame = ?, phone = ?, email = ?, password = ? WHERE id = ?`;
  const params = [name, firstame, phone, email, password, userId];
  db.run(sql, params, (err) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({
        message: "Une erreur est survenue lors de la mise à jour de la plante",
      });
    }

    return res.status(200).json({ message: "Profil mis à jour avec succès" });
  });
});

module.exports = router;
