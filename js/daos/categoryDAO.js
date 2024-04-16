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
  
  async getUserCategories(userId) {
    const categories = await this.category.findAll({
      attributes: ["id", "name", "description"],
      order: [['id', 'ASC']], // Order categories by ID
      raw: true
    });
  
    const categoriesWithCompletionStatus = await Promise.all(categories.map(async (category, index) => {
      let playable = false;

      const numLevelsInCat = await this.level.count({
        where: { category: category.id }
      });

      if (index === 0)
        playable = true;
      else if (index > 0) {
        const prevCatId = category.id - 1
        
        // Fetch the amount of levels for the previous category
        const numLevelsInPrevCat = await this.level.count({
          where: { category: prevCatId }
        });
        // Check if all levels in the previous category are completed
        const prevCatCompletedLevels = await this.level.findAll({
          attributes: ['id'],
          where: { category: prevCatId },
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
        playable = prevCatCompletedLevels.length === numLevelsInPrevCat && numLevelsInCat > 0; // TODO: Eliminar check temporal de que tenga niveles?
      }

      return {
        id: category.id,
        name: category.name,
        description: category.description,
        count: numLevelsInCat,
        playable,
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
