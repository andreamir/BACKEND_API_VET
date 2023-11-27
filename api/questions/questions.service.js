import * as questionsRepository from './questions.repository.js';

function getRandom() {
  const randomIndex = Math.floor(Math.random() * questionsRepository.getLength());
  const randomQuestion = questionsRepository.getByIndex({ randomIndex });
  return randomQuestion;
}

function getLength() {
  return questionsRepository.getLength();
}
// const { getLegth } = questionsRepostory; EN DESTRUCTURING, mejor en función

function getByIndex({ index }) {
  return questionsRepository.getByIndex({ index });
}

function post({ question }) {
  return questionsRepository.post({ question });
}

export {
  getRandom,
  getLength,
  getByIndex,
  post,
};

// el bueno debe ser sin el default
// lo he puesto para que se calle eslint
