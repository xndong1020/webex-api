const mongoose = require('mongoose');
const bluebird = require('bluebird');
require('dotenv').config();
mongoose.Promise = bluebird;
mongoose
    .connect('mongodb://admin:admin2019@ds259820.mlab.com:59820/express-hank', { useNewUrlParser: true })
    .then(() => {console.log('db connected')})
    .catch(err => {console.log('db error', err)});

module.export = mongoose;
