const mongoose = require('mongoose')
const bluebird = require('bluebird')
require('dotenv').config()

mongoose.Promise = bluebird

mongoose
  .connect(
    `mongodb://admin123:admin123@ds211096.mlab.com:11096/express-allen`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('db connceted')
  })
  .catch(err => {
    console.log('db err', err)
  })

module.exports = mongoose
