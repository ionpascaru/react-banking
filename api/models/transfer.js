const mongoose = require("mongoose");

const transferSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: false
    },
    payeeName: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false
    },
    amount: {
      type: Number,
      required: false
    },
    status: {
      type: String,
      required: false
    },
    reference: {
      type: String,
      required: false,
      trim: true,
      minlength: 2,
      maxlength: 20
    },
    sourceAccountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Account"
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User"
    },
    recipient: {
      type: String,
      required: false
      // type: mongoose.Schema.Types.ObjectId,
      // ref: 'User'
    }
  },
  {
    timestamps: true
  }
);

const Transfer = mongoose.model("Transfer", transferSchema);

module.exports = Transfer;
