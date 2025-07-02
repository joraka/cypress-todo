const { generateEmail, generatePassword } = require('./misc');

function generateUserObj() {
  return {
    name: 'Bob',
    email: generateEmail('marley.com', 'bob'),
    password: generatePassword(15),
    first_name: 'Bob',
    last_name: 'Marley',
    company: 'Bobina Marlina Corp',
    full_address: '420 5th Ave #304, New York, NY 10018, United States',
    address: '420 5th Ave #304',
    city: 'New York',
    state: 'New York',
    country: 'United States',
    zipcode: '10018',
    mobile_number: '+12124447282',
    birth_date: {
      day: 1,
      month: 2,
      monthStr: 'February',
      year: 1980,
    },
  };
}

module.exports = { generateUserObj };
