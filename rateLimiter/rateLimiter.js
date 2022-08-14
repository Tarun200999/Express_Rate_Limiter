const limiter = require('express-rate-limit')

// LIMIT REQUEST PER IP

const appLimiter = limiter({
  windowMs: 5000,
  max: 5,
})

// IN ABOVE EXAMPLE WE HAVE LIMITED 5 REQUEST PER IP FOR 5 SECOND

const routeLimiter = limiter({
  windowMs: 5000,
  max: 5,
  message: {
    code: 429,
    message: 'Too many request',
  },
  // legacyHeaders: false,
})

module.exports = {
  appLimiter: appLimiter,
  routeLimiter: routeLimiter,
}
