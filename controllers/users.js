const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { SALT_ROUNDS } = require('../utils/constants');
const { NotFoundError } = require('../errors/NotFoundError');
const { UnauthorizedError } = require('../errors/UnauthorizedError');

module.exports.getMe = (req, res, next) => {
  User.findById(req.user.id)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Пользователь не найден'));
        return;
      }
      res.send({ user });
    })
    .catch(next);
};

module.exports.updateMe = (req, res, next) => {
  const { email, name } = req.body;

  User.findByIdAndUpdate(
    req.user.id,
    { email, name },
    {
      new: true,
      runValidators: true,
    },
  )
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Пользователь не найден'));
        return;
      }
      res.send({ user });
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { email, password, name } = req.body;

  bcrypt.hash(password, SALT_ROUNDS)
    .then((hash) => {
      User.create({ email, password: hash, name })
        .then(() => res.status(201).send({ message: 'Пользователь создан' }))
        .catch(next);
    })
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        next(new UnauthorizedError('Не правильный email или пароль'));
        return;
      }
      // eslint-disable-next-line
      return (Promise.all([
        user,
        bcrypt.compare(password, user.password),
      ]));
    })
    .then(([user, isPasswordSuccess]) => {
      if (!isPasswordSuccess) {
        next(new UnauthorizedError('Не правильный email или пароль'));
        return;
      }
      // eslint-disable-next-line
      return (jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '7d' }));
    })
    .then((token) => {
      res.cookie('token', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
        .send({ token });
    })
    .catch(next);
};
