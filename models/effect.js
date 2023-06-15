const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const db = require(`../db`);

const effectSchema = new Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },
    settings: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = effectSchema;
