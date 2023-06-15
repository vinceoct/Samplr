const mongoose = require("mongoose");
const cabsimSchema = require("./cabsim");
const effectSchema = require("./effect");
const mailinglistSchema = require("./mailinglist");
const audioSchema = require("./audio");

const Cabsim = mongoose.model("Cabsim", cabsimSchema);
const Effect = mongoose.model("Effect", effectSchema);
const MailingList = mongoose.model("MailingList", mailinglistSchema);
const Audio = mongoose.model("Audio", audioSchema);

module.exports = {
  Cabsim,
  Effect,
  MailingList,
  Audio,
};
