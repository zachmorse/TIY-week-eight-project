const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
mongoose.Promise = require("bluebird");
const Activity = require("./models/Activity");
const app = express();
const port = process.env.PORT || 8080;
const dbURL = "mongodb://localhost:27017/statTracker";
const apiRouter = require("./routes/apiRoutes");
const checkAuth = require("./middleware/checkAuth");
const loginRouter = require("./routes/loginRoute");
// database connection:

mongoose.connect(dbURL).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("Connected to Moongoose DB: statTracker");
});

// middleware:

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

// routes:

app.use("/login", loginRouter);
app.use("/api/", checkAuth, apiRouter);

// listener:

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
