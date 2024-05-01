const bcrypt = require('bcrypt');

async function verifyPassword(password, hash) {
  return await bcrypt.compareSync(password, hash);
}

verifyPassword(
  '1234Segura!',
  '$2b$10$xHfMrJeaWS/vVcwV.wN32.SGpJh0ZBqp4RI4wfHMrfeWUXEwxmXB2'
);
