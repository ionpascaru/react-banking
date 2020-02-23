const CONFIG = require("../config/config");
const mongoose = require("mongoose").set(
  "debug",
  CONFIG.current_env === "development" ? true : false
);

mongoose.connect(`${CONFIG.mongodb_uri}`, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

mongoose.connection.on("error", err => {
  console.error(err);
  process.exit();
});
