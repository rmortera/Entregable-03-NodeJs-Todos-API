const Categories = require("../models/categories.model");
const Todos = require("../models/todos.model");
const Users = require("../models/users.model");

class TodosServices {
  static async create(newTodo) {
    try {
      const result = await Todos.create(newTodo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getAll() {
    try {
      const result = await Todos.findAll({
        attributes: {
          exclude: [
            "description",
            "category_id",
            "categoryId",
            "userId",
            "created_at",
            "user_id",
          ],
        },
        include: [
          {
            model: Users,
            attributes: ["username"],
          },
          {
            model: Categories,
            attributes: ["name"],
          },
        ],
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(newStatus, id) {
    try {
      const result = await Todos.update(newStatus, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
