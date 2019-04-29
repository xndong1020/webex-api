const express = require('express')
const Device = require('../models/Devices')
const { findAll,findById,create,findAndRemove } = require('../repo/deviceRepo')
const Joi = require('joi')
const router = express.Router()

// Device schema information 
const createDeviceSchema = Joi.object().keys({
    name : Joi.string().required(),
    url : Joi.string().required()
})
const updateDeviceSchema = Joi.object().keys({
    name : Joi.string(),
    url : Joi.string()
})

// Get all devices information 
router.get('/', async (req, res, next) => {
    try{
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

// Get specfic device information 
router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try{
        const result = await findById(id)
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

// Create a new device
router.post('/', async (req, res, next) => {
    const data = req.body
    try{
        await Joi.validate(data, createDeviceSchema)
        const result = await create(data)
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

//  Edit a device 
router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    try{
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

// Delete a device 
router.delete('/:id', async (req, res, next) => {
    const {id} = req.params

    try{
        await findAndRemove(id)
        res.status(200).send()
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router
