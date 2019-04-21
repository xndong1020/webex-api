const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwtwebtoken = require('jsonwebtoken')
const { JSON_TOKEN_SECRET } = require('../config')
const { findByEmail } = require('../repo/UserRepo')

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(401).send('Invalid Credentials')
    return
  }

  const userInDb = await findByEmail(email)

  if (!userInDb) {
    res.status(401).send('User does not exist')
    return
  }
  //   const isPasswordValid = await bcrypt.compare(userInDb.password, password)

  const token = await jwtwebtoken.sign(
    {
      sub: userInDb._id,
      email: userInDb.email
    },
    JSON_TOKEN_SECRET,
    {
      expiresIn: '1h'
    }
  )

  res.status(200).send(token)
})

module.exports = router
