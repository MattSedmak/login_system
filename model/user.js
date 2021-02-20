const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cryptoUrl: String,
  cryptoUrlExpiration: Date,
  todoList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
    },
  ],
});

userSchema.methods.addTask = async function (todoId) {
  this.todoList.push(todoId);

  await this.save();
};

const User = mongoose.model("user", userSchema);
module.exports = User;
