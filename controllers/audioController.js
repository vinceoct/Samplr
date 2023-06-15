const { Audio } = require("../models");
const db = require(`../db`);

const getAllAudio = async (req, res) => {
  try {
    const audio = await Audio.find();
    return res.status(200).json({ audio });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getAudioById = async (req, res) => {
  try {
    const { id } = req.params;
    const audio = await Audio.findById(id);
    if (audio) {
      res.set("Content-Type", "audio/mpeg");
      return res.send(audio.data);
    }
    return res.status(404).send("audio does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getAudioByName = async (req, res) => {
  try {
    const { value } = req.params;
    const audio = await Audio.findOne({ name: value });
    if (audio) {
      res.set("Content-Type", "audio/mpeg");
      return res.send(audio.data);
    }
    return res.status(404).send("audio does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const deleteAllAudio = async (req, res) => {
  try {
    const deleteAudio = await Audio.deleteMany();
    if (deleteAudio) {
      return res.status(200).send("cleared audio");
    }
    throw new Error("no messages found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllAudio,
  getAudioById,
  getAudioByName,
  deleteAllAudio
};
