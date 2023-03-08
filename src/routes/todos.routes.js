const { Router } = require("express");
const { getAllTodos, createTodo } = require("../controllers/todos.controller");

const router = Router();

router.post("/api/v1/todos", createTodo);
router.get("/api/v1/todos", getAllTodos);

module.exports = router;
