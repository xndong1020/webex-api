const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        isRequired : true
    },
    email : {
        type : String,
        isRequired : true
    }
})

const User = mongoose.model('User', UserSchema)

module.exports = User