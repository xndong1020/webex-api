const mongoose = require('mongoose')

// Device table 
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