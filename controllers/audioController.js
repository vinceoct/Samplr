const { Audio } = require('../models')
const db = require(`../db`)

const getAllAudio = async (req, res) => {
    try {
        const audio = await Audio.find()
        return res.status(200).json({ audio })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllAudio
}