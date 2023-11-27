import Router from 'express';
import db from './questions.js';
import * as questionsController from './questions.controller.js';

const router = Router();

router.get('/random', questionsController.getRandom);

router.get('/byIndex/:index', questionsController.getByIndex);

router.get('/byFilter', (req, res) => {
  const { query } = req;
  const keys = Object.keys(query);
  let dbCopy = [...db];
  // Object.keys devuelve lo que [category, level]
  // const query = req.query;
  // query es igual a un objeto .... query == {level:easy, category: cinema}
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; // En la primera vuelta entra categories, en la segunda level;
    const value = query[key];// level[easy]
    dbCopy = dbCopy.filter((question) => question[key] === value);
  }
  res.json(dbCopy);
});

router.post('', questionsController.post);

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  const deleted = db.splice(index, 1);
  res.json(deleted);
});

router.put('/:id', (req, res) => {
  const { id } = req.params; // id a reemplazar
  const index = db.findIndex((question) => question._id === id);
  // Comprueba todos los índices que hay en el objecto questions, y si encuentra el mismo
  // valor devuelve la posicion en la que se encuentra. Si no encuentra niguno, devuelve -1.
  if (index === -1) {
    res.json({ msg: 'El índice proporcionado no existe' });
  }
  const { body } = req; // item nuevo
  db[index] = body;
  const { _id } = db[index];
  db[index] = { ...body, _id };

  res.json(db[index]);
});

router.patch('/:id', (questionsController.patch));

export default router;
