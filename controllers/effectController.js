const { Effect } = require('../models')
const db = require(`../db`)

const getAllEffects = async (req, res) => {
    try {
        const effects = await Effect.find()
        return res.status(200).json({ effects })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getEffectsById = async (req, res) => {
    try {
        const { id } = req.params
        const effect = await Effect.findById(id)
        if(effect) {
            return res.status(200).json({ effect })
        }
        return res.status(404).send('cabsim does not exist')
    }catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllEffects,
    getEffectsById
}