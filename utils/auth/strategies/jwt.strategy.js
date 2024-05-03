const { Strategy, ExtractJwt } = require('passport-jwt');
const { config } = require('../../config/config');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.secret,
};

const jwtStrategy = new Strategy(options, (payload, done) => {
  if (payload) {
    return done(null, payload);
  }
  return done(null, false);
});

module.exports = jwtStrategy;
