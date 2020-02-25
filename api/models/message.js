const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false
    },
    sentDate: {
      type: Date,
      required: false
    },
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "User"
    },
    content: {
      type: String,
      trim: true,
      required: false,
      minlength: 10
    },
    isRead: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
