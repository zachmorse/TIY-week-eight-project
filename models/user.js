var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// --- SCHEMA

var userSchema = new Schema({
  name: {}
});

var User = mongoose.model("User", userSchema);
module.exports = User;
