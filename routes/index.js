const routes = require('express').Router();
const auth = require('../middlewares/auth');
const { NotFoundError } = require('../errors/NotFoundError');

routes.use(require('./autorize'));

routes.use(auth);

routes.use(require('./users'));

routes.use(require('./movies'));

routes.use((req, res, next) => {
  next(new NotFoundError('Страница не существует'));
});

module.exports = routes;
