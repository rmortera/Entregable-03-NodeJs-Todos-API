const UserServices = require("../services/users.service");

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const getAllUsers = await UserServices.getAll({
      attributes: ["username", "email"],
    });
    res.json(getAllUsers);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  getUsers,
  createUser,
};
