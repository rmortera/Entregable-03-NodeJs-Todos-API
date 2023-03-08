const UserServices = require("../services/users.service");

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
};
