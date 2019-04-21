const User = require('../models/Users')

const findAll = async () => {
  return await User.find({}, { __v: 0, password: 0 }).populate('devices')
}

const findById = async id => {
  return await User.findOne({ _id: id }, { __v: 0, password: 0 })
}

const create = async user => {
  return await User.create(user)
}

const update = async (id, user) => {
  return await User.findOneAndUpdate({ _id: id }, user)
}

const findAndRemove = async id => {
  return await User.findOneAndRemove(id)
}

const findByEmail = async email => {
  return await User.findOne({ email })
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  findByEmail,
  findAndRemove
}
