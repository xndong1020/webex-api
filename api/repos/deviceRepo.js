const Device = require('../models/Device')

const findAll = async () => {
  return await Device.find({})
}

const findById = async id => {
  return await Device.findOne({ _id: id })
}

const create = async device => {
  return await Device.create(device)
}

module.exports = {
  findAll,
  findById,
  create
}
