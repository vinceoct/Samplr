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
const getAudioById = async (req, res) => {
    try {
        const { id } = req.params
        const audio = await Audio.findById(id)
        if(audio) {
            return res.status(200).json({ audio })
        }
        return res.status(404).send('audio does not exist')
    }catch (e){
        return res.status(500).send(e.message)
    }
}
module.exports = {
    getAllAudio,
    getAudioById
}