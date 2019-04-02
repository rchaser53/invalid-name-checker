const zxcvbn = require('zxcvbn');
 
module.exports = (input) => {
  return zxcvbn(input);
};