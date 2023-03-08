// endpoint para crear usuarios

const { Router } = require("express");
const { getUsers, createUser } = require("../controllers/users.controller");

const router = Router();

router.post("/api/v1/users", createUser);
router.get("/api/v1/users", getUsers);

module.exports = router;
