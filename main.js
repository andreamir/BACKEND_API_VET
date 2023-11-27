import express from 'express';
import './database.js'; // no necesitamos poner funciones por lo que así sirve
import apiRouter from './api/router.js';

const server = express();
const port = 3000;

server.use(express.json());
server.use(apiRouter);

server.listen(port, () => {
  console.log(`Server working on port ${port}`);
});
// anotherFunction();
