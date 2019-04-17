const Device = require('../modules/Device');

const findAll = async () => {
    return await Device.find({})
}

const findById = async id => {
    return await Device.findOne({ _id: id })
}

const create = async device => {
    return await Device.create(data)
}

const deleteById = async id => {
    return await Device.findOneAndRemove({ _id: id })
}
module.exports = {
    findAll,
    findById,
    create,
    deleteById
}