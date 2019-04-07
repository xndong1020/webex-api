const mongoose = require('mongoose')
const bluebird = require('bluebird')
require('dotenv').config() // to read value of process.env.MongoURI

// Get Mongoose to use the bluebird promise library
mongoose.Promise = bluebird

mongoose
  .connect(
    `mongodb://admin:password2019@ds163255.mlab.com:63255/express-tutorial`,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Mongodb connected'))
  .catch(err => console.log(err))

module.exports = mongoose
