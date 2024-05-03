const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const { config } = require('../config/config');

router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      const payload = {
        sub: user._id,
        role: user.role,
      };
      const token = jwt.sign(payload, config.secret);
      res.json({
        user,
        token,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
