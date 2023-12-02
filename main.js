import express from 'express';
import './database.js'; // no necesitamos poner funciones por lo que así sirve
import apiRouter from './src/api/router.js';
import isLogged from './src/middlewares/isLogged.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(isLogged);
server.use(apiRouter);

server.listen(port, () => {
  console.log(`Server working on port ${port}`);
});
