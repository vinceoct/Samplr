const mongoose = require(`mongoose`)
const Schema  = mongoose.Schema
const db = require(`../db`)

const cabsimSchema = new Schema(
    {
        name: { type: String, required: true },
        code: { type: String, required: true },
        mic: { type: String, required: true},
        image: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = cabsimSchema