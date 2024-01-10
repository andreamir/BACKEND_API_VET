import express from 'express';
import cors from 'cors';
import './database.js'; // no necesitamos poner funciones por lo que así sirve
import swaggerUI from 'swagger-ui-express';
import basicInfo from './src/docs/index.js';
import apiRouter from './src/api/router.js';
import isLogged from './src/middlewares/isLogged.js';

const server = express();
const { PORT } = process.env; // nos traemos port del documento .env

server.use(express.json());
server.use(cors({ origin: true }));
server.use(isLogged);
server.use(apiRouter);
server.use('/api-docs', swaggerUI.serve.setup(basicInfo));

server.listen(PORT, () => {
  console.log(`Server working on port ${PORT}`);
});
