import * as authService from './auth.service.js';
import transporter from '../../config/mailer.js';
import users from '../users/users.model.js';

// async function register(req, res) {
//   const { username, password, repeatedPassword } = req.body;
//   if (password !== repeatedPassword) {
//     res.status(400);
//     res.json({ msg: 'Both password should match.' });
//     return;
//   }
//   const info = await transporter.sendMail({
//     from: '"Registered Successfully" <devdreacode@gmail.com>', // sender address
//     to: users.username, // list of receivers
//     subject: 'Registered Successfully ✔', // Subject line
//     html: '<b>Hello world?</b>', // html body
//   });

//   console.log('Message sent: %s', info.messageId);

//   const token = await authService.register({ username, password });
//   res.json({ token });
// }

async function register(req, res) {
  const { username, password, repeatedPassword } = req.body;
  if (password !== repeatedPassword) {
    res.status(400);
    res.json({ msg: 'Both passwords should match.' });
    return;
  }

  try {
    const newUser = await users.create({ username, password });

    const info = await transporter.sendMail({
      from: '"Registered Successfully" <devdreacode@gmail.com>',
      to: newUser.username,
      subject: 'Registered Successfully ✔',
      html: '<b>Hello world?</b>',
    });

    console.log('Message sent: %s', info.messageId);

    const token = await authService.register({ username, password });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Internal server error.' });
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    res.json({ msg: 'Username or password not found.' });
    return;
  }
  const token = await authService.login({ username, password });
  if (!token) {
    res.status(400);
    res.json({ msg: 'Wrong credentials.' });
    return;
  }
  res.json({ token });
}

export {
  login,
  register,
};
