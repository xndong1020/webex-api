const Device = require('../models/Devices')

// Find all devices 
const findAll = async () => {
    return await Device.find({})
}

// Find a specific device 
const findById = async id => {
    return await Device.findOne({_id : id})
}

// Create a new device
const create =  async data => {
    return await Device.create(data)
}

// Delete a device 
const findAndRemove = async id => {
    return await Device.findOneAndRemove({_id : id})
}

module.exports = {
    findAll,
    findById,
    create,
    findAndRemove
}