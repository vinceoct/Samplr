const mongoose = require(`mongoose`)
const  Schema  = mongoose.Schema
const db = require(`../db`)

const cabSchema = new Schema(
    {
        name: { Type: String, Required: True },
        spkrconfig: { Type: String, Required: True },
        mic: { Type: String, Required: True},
        image: { Type: String, Required: True }
    }
)




module.exports = cabSchema