const TodosServices = require("../services/todos.services");

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodosServices.getAll();
    res.json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTodos,
};
