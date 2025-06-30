function generateRandomString(length = 10) {
  let result = '';
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generatePassword(length = 16) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/~`';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function generateEmail(domain = 'example.com', prefix = 'user') {
  return `${prefix}_${generateRandomString(15)}@${domain}`;
}

function generateUserObj() {
  return {
    name: 'Bob',
    email: generateEmail('marley.com', 'bob'),
    password: generatePassword(15),
    first_name: 'Bob',
    last_name: 'Marley',
    company: 'Bobina Marlina',
    full_address: '420 5th Ave #304, New York, NY 10018, United States',
    address: '420 5th Ave #304',
    city: 'New York',
    state: 'New York',
    country: 'United States',
    zipcode: '10018',
    mobile_number: '+12124447282',
  };
}

module.exports = {
  generateEmail,
  generateRandomString,
  generatePassword,
  generateUserObj
};
