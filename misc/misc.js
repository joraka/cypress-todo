function randomString() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substring(0, 10);
}

function randomEmail(domain = 'example.com', prefix = 'user') {
  return `${prefix}_${randomString() + randomString()}@${domain}`;
}

module.exports = {
  randomEmail,
  randomString,
};
