const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
mongoose.Promise = require("bluebird");
const Arrowhead = require("./models/user");
const app = express();
const port = process.env.PORT || 8080;
const dbURL = "mongodb://localhost:27017/statTracker";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect(dbURL).then(function(err, db) {
  if (err) {
    console.log("error", err);
  }
  console.log("Connected to Moongoose DB: Stat Tracker");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
