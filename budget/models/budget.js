const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name of transaction"
  },
  value: {
    type: Number,
    required: "Amount"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;