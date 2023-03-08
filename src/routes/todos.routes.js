const { Router } = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todos.controller");

const router = Router();

router.post("/api/v1/todos", createTodo);
router.get("/api/v1/todos", getAllTodos);
router.put("/api/v1/todos/:id", updateTodo);
router.delete("/api/v1/todos/:id", deleteTodo);

module.exports = router;
