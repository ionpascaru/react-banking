const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    isActive: {
      type: Boolean,
      default: true
    },
    bankBranch: {  //bank identifier 4 digits + branch identifier 4 digits
      type: Number,
      required: true,
      minlength: 8,
      maxlength: 8
    },
    number: {     //spanish bank account number is 10
      type: Number,
      required: true,
      minlength:10,
      maxlength: 10
    },
    currency: {
      type: String,
      required: true
    },
    balance: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;