const Device = require('../models/Devices')

const findAll = async () => {
    return await Device.find({})
}

const findById = async id => {
    return await Device.findOne({_id : id})
}

const create =  async device => {
    return await Device.create(device)
}

const findAndRemove = async id => {
    return await Device.findOneAndRemove(id)
}

module.exports = {
    findAll,
    findById,
    create,
    findAndRemove
}