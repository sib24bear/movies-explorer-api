require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const errorsHandler = require('./middlewares/errorsHandler');
const { NotFoundError } = require('./errors/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const PORT = 3000;
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(bodyParser.json());
app.use(helmet());
app.use(limiter);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/bitfilmsdb');

app.use(cors({
  credentials: true,
  origin: [
    'https://localhost:3001',
    'https://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3000',
  ],
}));

app.use(requestLogger);

app.use('/signup', require('./routes/auth'));

app.use('/signin', require('./routes/login'));

app.use(auth);

app.use('/users', require('./routes/users'));

app.use('/movies', require('./routes/movies'));

app.use((req, res, next) => {
  next(new NotFoundError('Страница не существует'));
});

app.use(errorLogger);

app.use(errors());

app.use(errorsHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
