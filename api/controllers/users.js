const User = require("../models/user");

//UTILS

const {
  throwError,
  passError,
  handleValidationErrors
} = require("../util/errors");

//GET myself

exports.getMyself = async (req, res, next) => {
  try {
    const user = await req.user.getBasic();
    res.status(200).json(user);
  } catch (err) {
    passError(err, next);
  }
};

//TODO UPDATE