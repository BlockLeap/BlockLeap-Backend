"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class setDAO {
  sequelize;
  set;
  setLevels;
  setGroups;
  level;
  userGroup;
  levelSets;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.set = sequelize.models.set;
    this.setLevels = sequelize.models.setlevels;
    this.setGroups = sequelize.models.setGroups;
    this.level = sequelize.models.level;
    this.userGroup = sequelize.models.usergroup;
    this.levelSets = sequelize.models.levelsets;
  }

  async createSet(setData) {
    await this.set.sync();
    const createdSet = await this.set.create({
      name: setData.name,
      description: setData.description,
    });
    if (!createdSet) throw new ErrorException(ErrorCode.CantCreate);
    return createdSet;
  }

  async assignLevelsToSet(levelIds, setId) {
    await this.setLevels.sync(); // Asegurar que la tabla está sincronizada
  
    // Crear los objetos con set_id y level_id
    const assignments = levelIds.map(levelId => ({
      set_id: setId,
      level_id: levelId
    }));
  
    // Insertar los datos sin duplicados
    return await this.setLevels.bulkCreate(assignments, {
      ignoreDuplicates: true // Evita insertar si ya existe
    });
  }

  async removeLevelsFromSet(levelIds, setId) {
    if (!levelIds.length) return "No levels to remove."; // Evita llamadas vacías
  
    await this.setLevels.sync(); // Asegurar que la tabla está sincronizada
  
    return await this.setLevels.destroy({
      where: {
        set_id: setId,
        level_id: levelIds // Sequelize automáticamente genera `IN (levelIds)`
      }
    });
  }
  
  

  async assignSetToGroups(setId, groupIds) {
    await this.setGroups.sync();
    const assignments = groupIds.map(groupId => ({ set_id: setId, group_id: groupId }));
    return await this.setGroups.bulkCreate(assignments);
  }

  async getUserSets(id){
    await this.levelSets.sync();
    const foundSet = await this.levelSets.findAll({
      where: {
        owner_id: id,
      }
    });
    if (!foundSet) throw new ErrorException(ErrorCode.NotFound);
    return foundSet;
  }

  async getSetById(setId) {
    const foundSet = await this.levelSets.findAll({
      where: {
        id: setId,
      }
    });
    if (!foundSet) throw new ErrorException(ErrorCode.NotFound);
    return foundSet;
  }

  async getAllSets() {
    await this.set.sync();
    return await this.set.findAll();
  }

  async deleteSet(setId) {
    await this.set.sync();
    await this.set.destroy({ where: { id: setId } });
  }
}

module.exports = setDAO;
