const mongoose = require('mongoose')

const DeviceSchema = mongoose.Schema({
    name : {
        type : String,
        isRequired : true
    },
    url : {
        type : String,
        isRequired : true
    }
})

const Device = mongoose.model('Device', DeviceSchema)

module.exports = Device