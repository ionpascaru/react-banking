const User = require("../models/user");

//UTILS

const {
  throwError,
  passError,
  handleValidationErrors
} = require("../util/errors");

const { checkUpdatesValid, applyUpdates } = require("../util/updates");

//GET myself

exports.getMyself = async (req, res, next) => {
  try {
    const user = await req.user.getBasic();
    res.status(200).json(user);
  } catch (err) {
    passError(err, next);
  }
};

//update myself

exports.updateMyself = async (req, res, next) => {
  try {
    const updates = ["password", "email", "phone"];
    checkUpdatesValid(req, updates);
    applyUpdates(req, req.user);
    await req.user.save();
    res.status(201).json({ message: "User has been updated" });
  } catch (err) {
    passError(err, next);
  }
};
