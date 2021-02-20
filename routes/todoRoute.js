const express = require("express");
const route = express.Router();

// Importfunctions
const verifyUser = require("../middleware/verifyUser");
const todoController = require("../controller/todoController");

// Todopage
route.get("/todolist", verifyUser, todoController.todolist_get);
route.post("/todolist", verifyUser, todoController.addTodo_post);

// Delete todo
route.get("/todolist/delete/:id", verifyUser, todoController.deleteTodo_get);

// Edit todo
route.get("/todolist/edit/:id", verifyUser, todoController.editTodo_get);
route.post("/todolist/edit/:id", verifyUser, todoController.editTodo_post);
// *** export ***
module.exports = route;
