const Card = require("../models/card");

//Util
const {
  throwError,
  passError,
  handleValidationErrors
} = require("../util/errors");

//GET my cards

exports.getMyCards = async (req, res, next) => {
  try {
    let cards = await Card.find({ owner: req.user._id }).lean();
    if (!cards) {
      throwError("No cards found", 422);
    }
    res.status(200).json(cards);
  } catch (err) {
    passError(err, next);
  }
};

//GET one card

exports.getSingle = async (req, res, next) => {
  try {
    let card = await Card.findOne({
      _id: req.params.id,
      owner: req.user._id
    }).lean();
    if (!card) {
      throwError("No card found", 422);
    }
    res.status(200).json(card);
  } catch (err) {
    passError(err, next);
  }
};

//TODO CHANGE PIN

//TODO CHANGE LIMIT