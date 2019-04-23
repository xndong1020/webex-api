const User = require('../models/Users')

const findAll = async () => {
    return await User.find({})
}

const findById = async id => {
    return await User.findOne({_id : id})
}

const create =  async data => {
    return await User.create(data)
}

const findAndRemove = async id => {
    return await User.findOneAndRemove({_id : id})
}

module.exports = {
    findAll,
    findById,
    create,
    findAndRemove
}