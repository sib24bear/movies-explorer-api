const Movie = require('../models/movie');
const { ForbiddenError } = require('../errors/ForbiddenError');
const { NotFoundError } = require('../errors/NotFoundError');

module.exports.getMovies = (req, res, next) => {
  const owner = req.user.id;
  Movie.find({ owner })
    .then((movies) => {
      if (movies.length === 0) {
        next(new NotFoundError('Нет сохраненных фильмов'));
        return;
      }
      res.send({ data: movies });
    })
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: req.user.id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.deleteMovies = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then((movies) => {
      if (!movies) {
        next(new NotFoundError('Фильм с указанным id не найден'));
        return;
      }
      if (movies.owner.toString() !== req.user.id) {
        next(new ForbiddenError('Нет прав для удаления фильма.'));
        return;
      }
      Movie.findByIdAndRemove(req.params.movieId)
        .then((movie) => res.send({ data: movie }))
        .catch(next);
    })
    .catch(next);
};
