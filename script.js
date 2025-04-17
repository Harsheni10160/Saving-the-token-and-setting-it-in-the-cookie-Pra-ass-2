const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: '1h' // Token will expire in 1 hour
  });
  return token;
};

module.exports = encrypt;
