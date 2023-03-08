const { Router } = require("express");
const { getAllTodos } = require("../controllers/todos.controller");

const router = Router();

router.get("/api/v1/todos", getAllTodos);

module.exports = router;
