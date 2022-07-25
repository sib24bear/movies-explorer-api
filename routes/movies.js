const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { RegExpURL } = require('../utils/constants');
const { getMovies, createMovie, deleteMovies } = require('../controllers/movies');

const paramsValid = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
});

router.get('/', getMovies);
router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      country: Joi.string().required(),
      director: Joi.string().required(),
      duration: Joi.number().required(),
      year: Joi.string().required(),
      description: Joi.string().required(),
      image: Joi.string().required().pattern(RegExpURL),
      trailerLink: Joi.string().required().pattern(RegExpURL),
      thumbnail: Joi.string().required().pattern(RegExpURL),
      movieId: Joi.string().required(),
      nameRU: Joi.string().required(),
      nameEN: Joi.string().required(),
    }),
  }),
  createMovie,
);
router.delete('/:movieId', paramsValid, deleteMovies);

module.exports = router;
