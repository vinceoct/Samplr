const mongoose = require(`mongoose`)
const { Schema } = mongoose.Schema
const db = require(`../db`)

const mailinglistSchema = new Schema(
    {    
        name: { Type: String, Required: True }, 
        emailAddress:{ Type: String, Required: True },
        comment: { Type: String, Required: True },
    }
)




module.exports = mailinglistSchema