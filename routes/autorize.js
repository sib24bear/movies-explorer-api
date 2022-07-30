const router = require('express').Router();
const { validationCreateUser, validationLogin } = require('../utils/routesValidation');
const { createUser, login } = require('../controllers/users');

router.post(
  '/signup',
  validationCreateUser,
  createUser,
);

router.post(
  '/signin',
  validationLogin,
  login,
);

module.exports = router;
