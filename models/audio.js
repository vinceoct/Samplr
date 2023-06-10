const mongoose = require(`mongoose`)
const Schema  = mongoose.Schema
const db = require(`../db`)

const audioSchema = new Schema(
    {
        name: { type: String, required: true },
        data: { type: Buffer, required: true }
    },
    { timestamps: true }
)

module.exports = audioSchema