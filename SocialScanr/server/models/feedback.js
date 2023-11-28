// backend/models/feedback.js
const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
