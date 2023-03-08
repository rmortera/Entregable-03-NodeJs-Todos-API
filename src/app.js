const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const usersRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");

initModels();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((error) => console.log(error));

db.sync({ alter: true })
  .then(() => console.log("Synchronized database."))
  .catch((error) => console.log(error));

app.use(usersRoutes);
app.use(todosRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
