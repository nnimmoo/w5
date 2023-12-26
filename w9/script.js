const validator = require('validator');

const emailsToCheck = ['test@test.com', 'abcDE123'];

emailsToCheck.forEach(email => {
  if (validator.isEmail(email)) {
    console.log(`${email} is a valid email.`);
  } else {
    console.log(`${email} is NOT a valid email.`);
  }
});
