import jwt from 'jsonwebtoken';
import { hashSync, compareSync } from 'bcrypt';
import * as usersRepository from '../users/users.repository.js';

function getToken(userId) {
  const payload = { userId };
  const { TOKEN_SECRET_WORD } = process.env;
  const { TOKEN_TIME_OUT } = process.env;
  const options = {
    expiresIn: TOKEN_TIME_OUT,
  };
  const token = jwt.sign(payload, TOKEN_SECRET_WORD, options);
  return token;
}

async function register({ username, password }) {
  const { SALT_OR_ROUNDS_HASH } = process.env;
  const hashedPassword = hashSync(password, Number(SALT_OR_ROUNDS_HASH));
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
