var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// --- SCHEMA

var activitySchema = new Schema({
  activity: {
    type: String,
    required: true
  },
  statistics: {
    datePerformed: {
      type: String,
      required: true,
      default: Date.now
    },
    volume: {
      type: Number,
      required: true
    }
  }
});

var Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
