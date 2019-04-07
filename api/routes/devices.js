const express = require('express')
const { findAll, findById, create } = require('../repos/deviceRepo')
const Joi = require('joi')
const router = express.Router()

const createDeviceSchema = Joi.object().keys({
  name: Joi.string().required(),
  url: Joi.string().required()
})

const updateDeviceSchema = Joi.object().keys({
  name: Joi.string(),
  url: Joi.string()
})

/* GET devices listing. */
router.get('/', async (req, res, next) => {
  try {
    const result = await findAll()
    res.send(result)
  } catch (err) {
    res.status(400).send(err)
  }
})

/* GET devices listing. */
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await findById(id)
    res.send(result)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.post('/', async (req, res, next) => {
  const data = req.body
  try {
    await Joi.validate(data, createDeviceSchema)
    const result = await create(data)
    res.send(result)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.put('/:id', async (req, res, next) => {
  const { id } = req.params
  const data = req.body
  try {
    await Joi.validate(data, updateDeviceSchema)
    const deviceInDb = await findById(id)

    for (const key in data) {
      deviceInDb[key] = data[key]
    }

    await deviceInDb.save()

    res.status(200).send()
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    await Device.findOneAndRemove({ _id: id })
    res.status(200).send()
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
