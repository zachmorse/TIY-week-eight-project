const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");
const Activity = require("./models/Activity");
const app = express();
const port = process.env.PORT || 8080;
const dbURL = "mongodb://localhost:27017/statTracker";
const apiRouter = require("./routes/apiRoutes.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes

app.use("/api/", apiRouter);

mongoose.connect(dbURL).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("Connected to Moongoose DB: Stat Tracker");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
