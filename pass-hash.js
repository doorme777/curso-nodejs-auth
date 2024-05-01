const bcrypt = require('bcrypt');

async function hasBcrypt() {
  const password = '1234Segura!';
  const hash = await bcrypt.hashSync(password, 10);
  console.log(hash);
}

hasBcrypt();
