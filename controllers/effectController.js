const { Effect } = require("../models");
const db = require(`../db`);

const getAllEffects = async (req, res) => {
  try {
    const effects = await Effect.find();
    return res.status(200).json({ effects });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getEffectsById = async (req, res) => {
  try {
    const { id } = req.params;
    const effect = await Effect.findById(id);
    if (effect) {
      return res.status(200).json({ effect });
    }
    return res.status(404).send("cabsim does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getEffectByCode = async (req, res) => {
  try {
    const { value } = req.params;
    const effect = await Effect.find({ code: value });
    if (effect) {
      return res.status(200).json({ effect });
    }
    return res.status(404).send("effect does not exist");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createEffect = async (req, res) => {
  try {
    const neweffect = await new Effect(req.body);
    await neweffect.save();
    return res.status(201).json({ newmessage });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteAllEffects = async (req, res) => {
  try {
    const deleteEffects = await Effect.deleteMany();
    if (deleteEffects) {
      return res.status(200).send("cleared effects");
    }
    throw new Error("no messages found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  getAllEffects,
  getEffectsById,
  getEffectByCode,
  createEffect,
  deleteAllEffects
};
