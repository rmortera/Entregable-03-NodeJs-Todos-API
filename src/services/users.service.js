const Users = require("../models/users.model");

class UserServices {
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
