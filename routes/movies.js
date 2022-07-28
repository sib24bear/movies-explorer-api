const router = require('express').Router();
const { paramsValid, validationCreateMovie } = require('../utils/routesValidation');
const { getMovies, createMovie, deleteMovies } = require('../controllers/movies');

router.get('/movies', getMovies);
router.post(
  '/movies',
  validationCreateMovie,
  createMovie,
);
router.delete('/movies/:movieId', paramsValid, deleteMovies);

module.exports = router;
