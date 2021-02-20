const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: { type: String, required: true, minlength: 2, maxlength: 30 },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("todo", todoSchema);

module.exports = Todo;
