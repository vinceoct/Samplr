const { Cabsim } = require('../models')
const db = require(`../db`)

const getAllCabsims = async (req, res) => {
    try {
        const cabsims = await Cabsim.find()
        return res.status(200).json({ cabsims })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getCabsimById = async (req, res) => {
    try {
        const { id } = req.params
        const cabsim = await Cabsim.findById(id)
        if(cabsim) {
            return res.status(200).json({ cabsim })
        }
        return res.status(404).send('cabsim does not exist')
    }catch (e){
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCabsims,
    getCabsimById
}





