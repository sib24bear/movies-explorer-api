const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../errors/UnauthorizedError');
const { NODE_ENV, SECRET_KEY } = process.env;

module.exports = (req, res, next) => {
  const authorization = req.cookies.token;

  if (!authorization) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  let payload;

  try {
    payload = jwt.verify(authorization, NODE_ENV === 'production' ? SECRET_KEY : 'secret-key');
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация'));
    return;
  }

  req.user = payload;

  next();
};
