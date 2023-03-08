// endpoint para crear usuarios

const { Router } = require("express");
const { getUsers } = require("../controllers/users.controller");

const router = Router();

router.get("/api/v1/users", getUsers);

module.exports = router;
