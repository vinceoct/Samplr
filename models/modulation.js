const mongoose = require(`mongoose`)
const Schema  = mongoose.Schema
const db = require(`../db`)

const modulationSchema = new Schema(
    {
       name: { Type: String, Required: True },
       type: { Type: String, Required: True },
       description: { Type: String, Required: True },
       settings: { Type: String, Required: True },
       image: { Type: String, Required: True }
    }
)




module.exports = modulationSchema