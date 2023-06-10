const { MailingList } = require('../models')
const db = require(`../db`)

const getAllMessages = async (req, res) => {
    try {
        const messages = await MailingList.find()
        return res.status(200).json({ messages })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createMessage = async (req, res) => {
    try {
        const newmessage = await MailingList.find()
        return res.status(200).json({ newmessage })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMessages,
    createMessage
}