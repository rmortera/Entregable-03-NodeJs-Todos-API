// endpoint para crear usuarios

const { Router } = require("express");
const {
  getUsers,
  createUser,
  getUsersWithTodos,
} = require("../controllers/users.controller");

const router = Router();

router.post("/api/v1/users", createUser);
router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/:userId/todos", getUsersWithTodos);

module.exports = router;
