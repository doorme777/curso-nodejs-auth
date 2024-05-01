const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const { Strategy } = require('passport-local');
const UserService = require('../../../services/user.service');
const service = new UserService();

const LocalStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    const isMatch = user
      ? await bcrypt.compare(password, user.password)
      : false;
    if (!user) {
      return done(boom.unauthorized(), false);
    }
    if (!(await isMatch)) {
      return done(boom.unauthorized(), false);
    }
    delete user.password;
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});

module.exports = LocalStrategy;
