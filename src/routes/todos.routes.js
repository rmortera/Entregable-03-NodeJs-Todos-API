const { Router } = require("express");
const {
  getAllTodos,
  createTodo,
  updateTodo,
} = require("../controllers/todos.controller");

const router = Router();

router.post("/api/v1/todos", createTodo);
router.get("/api/v1/todos", getAllTodos);
router.put("/api/v1/todos/:id", updateTodo);

module.exports = router;
