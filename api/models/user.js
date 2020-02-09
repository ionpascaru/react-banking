const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true
    },
    firstName: {
      type: String,
      Required: true,
      minlength: 2
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    phone: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 10
    },
    picture: {
      type: String,
      required: true,
      minlength: 2
    },
    streetAddr: {
      type: String,
      required: true,
      minlength: 2
    },
    postcode: {
      type: String,
      required: true,
      minlength: 5
    },
    city: {
      type: String,
      required: true,
      minlength: 3
    }
  },
  {
    timestamps: true
  }
);

module.exports = User;
