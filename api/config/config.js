require("dotenv").config();

let CONFIG = {};

// JWT
CONFIG.jwt_secret_key = process.env.JWT_SECRET_KEY;
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION;

// Database
CONFIG.mongodb_uri = process.env.MONGODB_URI;

// Mailgun
CONFIG.mailgun_api_key = process.env.MAILGUN_API_KEY;
CONFIG.mailgun_domain = process.env.MAILGUN_DOMAIN;
CONFIG.mailgun_host = process.env.MAILGUN_HOST;

module.exports = CONFIG;
