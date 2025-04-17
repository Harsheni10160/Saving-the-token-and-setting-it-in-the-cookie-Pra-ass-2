const encrypt = require('./script');

const payload = {
  userId: 123,
  username: 'john_doe'
};

const secret = 'mySuperSecretKey';

const token = encrypt(payload, secret);
console.log('Generated Token:', token);
