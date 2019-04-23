const express = require('express')
const Users = require('../models/Users.js')
const { findAll,findById,create,findAndRemove } = require('../repo/UserRepo')
const Joi = require('joi')
const router = express.Router()

const createUserSchema = Joi.object().keys({
    name : Joi.string().required(),
    email : Joi.string().required(),
    password : Joi.string().required()
})

const updateUserSchema = Joi.object().keys({
    name : Joi.string(),
    email : Joi.string(),
    password : Joi.string()
})

router.get('/', async (req, res, next) => {
    try{
        const result = await findAll()
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params
    try{
        const result = await findById(id)
        res.send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})


router.post('/', async (req, res, next) => {
    const data = req.body
    try{
        await Joi.validate(data, createUserSchema)
        const result = await create(data)
        res.status(201).send(result)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    try{
        await Joi.validate(data, updateUserSchema)
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
    const {id} = req.params

    try{
        await findAndRemove(id)
        res.status(200).send()
    } catch (err) {
        res.status(400).send(err)
    }
})



module.exports = router

