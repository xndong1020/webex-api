const Device = require('../models/Devices')

const findAll = async () => {
    return await Device.find({})
}

const findById = async id => {
    return await Device.findOne({_id : id})
}

const create =  async data => {
    return await Device.create(data)
}

const findAndRemove = async id => {
    return await Device.findOneAndRemove({_id : id})
}

module.exports = {
    findAll,
    findById,
    create,
    findAndRemove
}