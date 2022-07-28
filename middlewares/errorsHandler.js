const { MONGO_DUPLICATE_ERROR_CODE } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  if (err.name === 'ValidationError' || err.name === 'CastError' || err.statusCode === 400) {
    res.status(err.statusCode).send({ message: err.message });
  }
  if (err.statusCode === 401) {
    res.status(err.statusCode).send({ message: err.message });
  }
  if (err.statusCode === 403) {
    res.status(err.statusCode).send({ message: err.message });
  }
  if (err.statusCode === 404) {
    res.status(err.statusCode).send({ message: err.message });
  }
  if (err.code === MONGO_DUPLICATE_ERROR_CODE) {
    res.status(409).send({ message: 'Email занят' });
  }

  res.status(500).send({ message: 'Проблема с сервером' });
  next();
};
