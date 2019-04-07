const Device = require('../models/Device')

const findAll = async () => {
  return await Device.find({})
}

const findById = async id => {
  return await Device.findOne({ _id: id })
}

const createOne = async device => {
  return await Device.create(device)
}

const updateOne = async (id, device) => {
  const deviceInDb = await findById(id)

  for (const key in device) deviceInDb[key] = device[key]

  return await deviceInDb.save()
}

const deleteOne = async id => {
  return await Device.findOneAndDelete({ _id: id })
}

module.exports = {
  findAll,
  findById,
  createOne,
  updateOne,
  deleteOne
}
