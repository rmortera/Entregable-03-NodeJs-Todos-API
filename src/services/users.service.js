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
}

module.exports = UserServices;
