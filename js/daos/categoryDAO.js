"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class categoryDAO {
  sequelize;
  category;
  level;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.category = sequelize.models.category;
    this.level = sequelize.models.level;
  }

  async getCategories() {
    await this.category.sync();
    return await this.category.findAll({
      include: [
        {
          model: this.level,
          as: "levels",
        },
      ],
      attributes: [
        "id",
        "name",
        "description",
        [this.sequelize.fn("COUNT", this.sequelize.col("levels.id")), "count"],
      ],
      group: ["category.id"],
    });
  }

  async getCategoryById(id) {
    await this.category.sync();
    const found = await this.category.findByPk(id);
    if (!found) throw new ErrorException(ErrorCode.NotFound);
    return found;
  }
}

module.exports = categoryDAO;
