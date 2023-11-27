import * as questionsService from './questions.service.js';
import db from './questions.js';

function getRandom(req, res) {
  const randomQuestion = questionsService.getRandom();
  return res.json(randomQuestion);
}
function patch(req, res) {
  const { id } = req.params;
  const index = db.findIndex((question) => question._id === id);
  if (index === -1) {
    return res.json({ msg: 'El índice proporcionado no existe' });
  }
  const { body } = req;
  db[index] = { ...db[index], ...body };
  return res.json(db[index]);
}

function getByIndex(req, res) {
  const { index } = req.params;
  const indexAsInt = parseInt(index);
  if (Number.isNaN(indexAsInt)) {
    return res.json({ error: 'Índice no permitido' });
  }
  const question = questionsService.getByIndex({ index: indexAsInt });
  if (!question) {
    return res.json({ error: 'Índice superior a la cantidad de preguntas' });
  }

  return res.json(question);
}

function post(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    return res.json({ error: 'El body está vacío :c' });
  }
  const createdQuestion = questionsService.post({ question: body });
  return res.json(createdQuestion);
}

export {
  getRandom,
  patch,
  getByIndex,
  post,
};
