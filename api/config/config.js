require("dotenv").config();

let CONFIG = {};

// JWT
CONFIG.jwt_secret_key = process.env.JWT_SECRET_KEY;
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION;

module.exports = CONFIG;
