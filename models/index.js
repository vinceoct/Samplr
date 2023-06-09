const mongoose = require('mongoose')
const cabSchema = require('./cabsim')
const effectSchema = require('./effect')
const mailinglistSchema = require('./mailinglist')

const Cab = mongoose.model('Cab', cabSchema)
const Effect = mongoose.model('Drive', effectSchema)
const MailingList = mongoose.model('MailingList', mailinglistSchema)

module.exports = {
    Cab,
    Effect,
    MailingList 
}