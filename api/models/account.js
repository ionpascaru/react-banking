const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: false
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User"
    },
    isActive: {
      type: Boolean,
      default: true
    },
    sortcode: {
      type: Number,
      required: false,
      minlength: 6,
      maxlength: 6
    },
    number: {
      type: Number,
      required: false,
      minlength: 8,
      maxlength: 8
    },
    currency: {
      type: String,
      required: false
    },
    balance: {
      type: Number,
      required: false
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
