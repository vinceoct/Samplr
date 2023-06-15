const { MailingList } = require("../models");
const db = require(`../db`);

const getAllMessages = async (req, res) => {
  try {
    const messages = await MailingList.find();
    return res.status(200).json({ messages });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createMessage = async (req, res) => {
  try {
    const newmessage = await new MailingList(req.body);
    await newmessage.save();
    return res.status(201).json({ newmessage });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAllMessages = async (req, res) => {
  try {
    const deleteMessages = await MailingList.deleteMany();
    if (deleteMessages) {
      return res.status(200).send("cleared messages");
    }
    throw new Error("no messages found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllMessages,
  createMessage,
  deleteAllMessages,
};
