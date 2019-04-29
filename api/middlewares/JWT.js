const jwtwebtoken = require('jsonwebtoken')
const { JSON_TOKEN_SECRET } = require('../config')

const JWT = (req, res) => {
  try {
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[1]

    try {
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
  } catch (e) {
    req.isAuthenticated = false
  }
}

module.exports = JWT