import jwt from 'jsonwebtoken';
import * as userService from '../api/users/users.service.js';

function unauthorized(res) {
  res.status(401);
  res.json({ msg: 'Unauthorized' });
}

function isLogged(req, res, next) {
  const publicRoutes = [
    '/auth/login',
    '/auth/register',
  ];
  const isPublicRoute = publicRoutes.some((publicRoute) => req.url.startsWith(publicRoute));

  if (isPublicRoute) {
    next();
    return;
  }
  const token = req.headers.authorization;
  if (!token) {
    unauthorized(res);
    console.log('No hay token');
    return;
  }
  const { TOKEN_SECRET_WORD } = process.env;

  jwt.verify(token, TOKEN_SECRET_WORD, async (error, payload) => {
    if (error) {
      console.error('jsw error');
      unauthorized(res);
      return;
    }
    const user = await userService.getById({ id: payload.userId });
    req.user = user;
    next();
  });
}

export default isLogged;
