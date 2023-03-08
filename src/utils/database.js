const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "todo_api",
  host: "localhost",
  post: 5432,
  username: "postgres",
  password: "root",
  dialect: "postgres",
});

module.exports = db;
