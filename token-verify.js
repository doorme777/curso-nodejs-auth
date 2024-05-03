const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIzIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzE0NjA1MDQ3fQ.2XKQx7nHDqzMeUJlvgv6c7_oDuFxDQfDWfCCYNMKe6E';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
