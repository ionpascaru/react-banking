const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Account"
  },
  date: {
    type: Date,
    required: true
  },
  income: {
    type: Number,
    required: true
  },
  expenses: {
    type: Number,
    required: true
  }
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;
