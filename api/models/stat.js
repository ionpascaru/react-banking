const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: false
  },
  date: {
    type: Date,
    required: false
  },
  income: {
    type: Number,
    required: false
  },
  expenses: {
    type: Number,
    required: false
  }
});

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;
