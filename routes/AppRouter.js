const Router = require(`express`).Router()

const CabsimRouter = require(`./cabsimRouter`)
const EffectRouter = require(`./effectRouter`)
const AudioRouter = require(`./audioRouter`)
const MailingListRouter = require(`./mailinglistRouter`)


Router.use(`/cabsims`, CabsimRouter)
Router.use(`/effect`, EffectRouter)
Router.use(`/audio`, AudioRouter)
Router.use(`/mailinglist`, MailingListRouter)

module.exports = Router