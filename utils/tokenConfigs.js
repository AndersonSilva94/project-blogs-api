const secret = 'senhaSuperSuperSecretaDoAndy';
const jwtConfig = {
  expiresIn: '30min',
  algorithm: 'HS256',
};

module.exports = {
  secret,
  jwtConfig,
};
