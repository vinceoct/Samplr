const { Cabsim } = require("../models");
const db = require(`../db`);

const getAllCabsims = async (req, res) => {
  try {
    const cabsims = await Cabsim.find();
    return res.status(200).json({ cabsims });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getCabsimById = async (req, res) => {
  try {
    const { id } = req.params;
    const cabsim = await Cabsim.findById(id);
    if (cabsim) {
      return res.status(200).json({ cabsim });
    }
    return res.status(404).send("cabsim does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getCabsimByCode = async (req, res) => {
  try {
    const { value } = req.params;
    const cabsim = await Cabsim.find({ code: value });
    if (cabsim) {
      return res.status(200).json({ cabsim });
    }
    return res.status(404).send("cabsim does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createCabsim = async (req, res) => {
  try {
    const newCabsim = await new Cabsim(req.body);
    await newCabsim.save();
    return res.status(201).json({ newmessage });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAllCabsims = async (req, res) => {
  try {
    const deleteCabsims = await Cabsim.deleteMany();
    if (deleteCabsims) {
      return res.status(200).send("cleared cabsims");
    }
    throw new Error("no messages found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllCabsims,
  getCabsimById,
  getCabsimByCode,
  createCabsim,
  deleteAllCabsims
};
