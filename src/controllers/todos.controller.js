const TodosServices = require("../services/todos.services");

const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const todo = await TodosServices.create(newTodo);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodosServices.getAll();
    res.json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const newStatus = req.body;
    await TodosServices.update(newStatus, id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await TodosServices.delete(id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};
