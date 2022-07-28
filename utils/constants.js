module.exports.SALT_ROUNDS = 10;
module.exports.MONGO_DUPLICATE_ERROR_CODE = 11000;

module.exports.corsParams = {
  credentials: true,
  origin: [
    'https://localhost:3001',
    'https://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3000',
    'http://movies.diplom.nomoredomains.xyz',
    'https://movies.diplom.nomoredomains.xyz',
  ],
};
