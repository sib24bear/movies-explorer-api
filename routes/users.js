const router = require('express').Router();
const { validationUpdateMe } = require('../utils/routesValidation');
const { getMe, updateMe } = require('../controllers/users');

router.get('/users/me', getMe);
router.patch(
  '/users/me',
  validationUpdateMe,
  updateMe,
);

module.exports = router;
