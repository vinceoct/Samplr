const mongoose = require('mongoose')
const cabSchema = require('./cabsim')
const driveSchema = require('./drive')
const modulationSchema = require('./modulation')
const mailinglistSchema = require('./mailinglist')

const Cab = mongoose.model('Cab', cabSchema)
const Drive = mongoose.model('Drive', driveSchema)
const Modulation = mongoose.model('Modulation', modulationSchema)
const MailingList = mongoose.model('MailingList', mailinglistSchema)

module.exports = {
    Cab,
    Drive,
    Modulation,
    MailingList 
}