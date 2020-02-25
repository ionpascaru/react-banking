const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User"
    },
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Account"
    },
    isActive: {
      type: Boolean,
      default: true
    },
    number: {
      type: Number,
      required: false
    },
    pin: {
      type: Number,
      required: false
    },
    expiresMonth: {
      type: Number,
      required: false
    },
    expiresYear: {
      type: Number,
      required: false
    },
    dailyOnlineLimit: {
      type: Number,
      required: false,
      default: 2000
    },
    dailyWithdrawalLimit: {
      type: Number,
      required: false,
      default: 2000
    },
    monthlyOnlineLimit: {
      type: Number,
      required: false,
      default: 10000
    },
    monthlyWithdrawalLimit: {
      type: Number,
      required: false,
      default: 10000
    }
  },
  {
    timestamps: true
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
