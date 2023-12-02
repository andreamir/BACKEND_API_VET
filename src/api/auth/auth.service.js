import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt';
import * as usersRepository from '../users/users.repository.js';

function getToken(userId) {
  const payload = { userId };
  const secretWord = 'isASecret';
  const options = {
    expiresIn: 60 * 60, // '1h'
  };
  const token = jwt.sign(payload, secretWord, options);
  return token;
}

async function register({ username, password }) {
  const hashedPassword = hashSync(password, 5);
  const user = await usersRepository.create({ username, password: hashedPassword });
  const token = getToken(user._id);
  return token;
}

async function login({ username, password }) {
  const user = await usersRepository.getByUsername({ username });
  let token;
  if (user && compareSync(password, user.password)) {
    token = getToken(user._id);
  }
  return token;
}

export {
  login,
  register,
};
