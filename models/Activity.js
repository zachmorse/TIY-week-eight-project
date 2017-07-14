var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// --- SCHEMA

var activitySchema = new Schema({
  activity: {
    type: String,
    required: true
  },
  statistics: {
    unitOfMeasurement: {
      type: String,
      required: true
    },
    volume: {
      type: Number,
      required: true
    },
    datePerformed: {
      type: String,
      required: true,
      default: Date.now
    }
  }
});

var Activity = mongoose.model("Activity", activitySchema);
module.exports = Activity;
