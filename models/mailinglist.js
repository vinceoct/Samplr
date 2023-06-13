const mongoose = require(`mongoose`)
const Schema = mongoose.Schema
const db = require(`../db`)

const mailinglistSchema = new Schema(
    {    
        name: { type: String, required: true }, 
        email:{ type: String, required: true },
        comment: { type: String, required: true },
    }
)

module.exports = mailinglistSchema