"use strict";

const { Op } = require("sequelize");
const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class categoryDAO {
  sequelize;
  category;
  level;
  play;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.category = sequelize.models.category;
    this.level = sequelize.models.level;
    this.play = sequelize.models.play;
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
    
  areAllLevelsCompleted(levels) {
    for (const level of levels) {
      if (!level.plays || level.plays.length === 0) {
        return false; // If any level is not completed, return false
      }
    }
    return true; // All levels are completed
  }

  async getUserCategories(userId) {
    const categories = await this.category.findAll({
      attributes: ["id", "name", "description"],
      order: [['id', 'ASC']], // Order categories by ID
      raw: true
    });
  
    const categoriesWithCompletionStatus = await Promise.all(categories.map(async (category, index) => {

      let levels = await this.level.count({
        where: { category: category.id }
      });

      let previousCategoryLevelsCompleted = true;

      if (index > 0) {
        const previousCategory = categories[index - 1];

        // Fetch the amount of levels for the previous category
        levels = await this.level.count({
          where: { category: previousCategory.id }
        });

        // Check if all levels in the previous category are completed
        const previousCategoryLevels = await this.level.findAll({
          attributes: ['id'],
          where: { category: previousCategory.id },
          include: [
            {
              model: this.play,
              as: 'plays',
              attributes: [],
              where: {
                user: userId,
                stars: {
                  [Op.gt]: 0,
                }
              },
              required: true // Require at least one play record for each level
            }
          ],
          raw: true
        });
        previousCategoryLevelsCompleted = previousCategoryLevels.length === levels;
      }

      // We count the levels from each category
      const count = await this.level.count({
        where: { category: category.id }
      });

      return {
        id: category.id,
        name: category.name,
        description: category.description,
        count: count,
        playable: previousCategoryLevelsCompleted
      };
      
    }));
  
    return categoriesWithCompletionStatus;
  }

  async getCategoryById(id) {
    await this.category.sync();
    const found = await this.category.findByPk(id);
    if (!found) throw new ErrorException(ErrorCode.NotFound);
    return found;
  }
}

module.exports = categoryDAO;
