import db from './questions.js';

function getByIndex({ index }) {
  return db[index];
}
function getLength() {
  return db.length;
}
function post({ question }) {
  const newQuestion = { ...question };
  const lastQuestion = db[getLength() - 1];
  newQuestion._id = parseInt(lastQuestion._id) + 1;
  const length = db.push(newQuestion);
  const lastIndex = length - 1;
  return db[lastIndex];
}

export { getByIndex, getLength, post };
