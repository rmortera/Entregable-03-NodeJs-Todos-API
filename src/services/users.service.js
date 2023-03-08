const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class UserServices {
  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const getUsers = await Users.findAll();
      return getUsers;
    } catch (error) {
      throw error;
    }
  }

  static async userWithTodos(userId) {
    try {
      const result = await Users.findByPk(userId, {
        attributes: {
          exclude: [
            "description",
            "userId",
            "createdAt",
            "updatedAt",
            "password",
          ],
        },
        include: [
          {
            model: Todos,
            attributes: ["title", "status"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;
