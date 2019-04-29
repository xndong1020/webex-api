const jwtwebtoken = require('jsonwebtoken')
const { JSON_TOKEN_SECRET } = require('../config')

const checkJwt = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) return next(new Error('Auth header missing'))
    const bits = authHeader.split(' ')
    
    if (!bits || bits.length !== 2) return next(new Error('Auth header wrong shape'))
    
    const token = authHeader.split(' ')[1]
    const result = jwtwebtoken.verify(token, JSON_TOKEN_SECRET)
    
    req.isAuthenticated = true
    req.user = {
      id: result.sub,
      email: result.email
    }
    next()
  } catch (e) {
    req.isAuthenticated = false
    next(e)
  }
}

module.exports = checkJwt
