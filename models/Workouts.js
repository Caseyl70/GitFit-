const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

var MuscleSchema = new Schema({

    name: {
        type: String,
        required: true,
    },
    // Rep scheme
    reps: {
        type: String,
        required: true
    },
    // sets, a string, must be entered
    sets: {
        type: String,
        required: true
    },
    // date is just a string
    date: {
        type: Date,
        default: Date.now
    }
});

// Create the Headline model using the headlineSchema
var Workout = mongoose.model("Workout", MuscleSchema);

// Export the Headline model
module.exports = Workout;
