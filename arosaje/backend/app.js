import express from 'express';
import cors from 'cors';
import usersRouter from './users';
import plantsRouter from './plants';
import { json } from 'body-parser';

const app = express();
app.use(cors());
app.use(json({ limit: '10mb' }));

// Utiliser l'Endpoint des utilisateurs
app.use('', usersRouter);
app.use('', plantsRouter);

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Le serveur est démarré sur le port 3000');
});
