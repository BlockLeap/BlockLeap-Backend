"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class groupDAO {
  sequelize;
  group;
  classlevel;
  setGroups;
  classLevels;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.group = sequelize.models.group;
    this.classlevel = sequelize.models.classLevel;
    this.setGroups = sequelize.models.setgroups;
    this.classLevels = sequelize.models.classlevels;
  }

  async createGroup(groupName,description) {
    await this.group.sync();
    const createdGroup = await this.group.create({
      name: groupName,
      Description: description
    });
    if (!createdGroup) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
    return createdGroup;
  }


  
  async addLevelClass(id_nivel, id_clase) {

    await this.classLevels.sync(); 
    if (!Array.isArray(id_nivel) || id_nivel.length === 0) {
      throw new Error("El array de levels está vacío o no es válido.");
    }
    const classToInsert = id_nivel.map(id_nivel => ({
      id_nivel: id_nivel,
      id_clase: id_clase
    }));
  
    const addedLevels = await this.classLevels.bulkCreate(classToInsert);
  
    if (!addedLevels || addedLevels.length === 0) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
  
    return addedLevels;
  }
  
  async deleteLevelClass(id_nivel, id_clase) {
    await this.classLevels.sync();

    const deletedRows = await this.classLevels.destroy({
      where: {
        id_nivel: id_nivel,
        id_clase: id_clase
      }
    });
  
    if (deletedRows === 0) {
      throw new Error("No se encontró la relación set-group para eliminar."); 
    }
  
    return { message: "Registro eliminado correctamente." };
    
  }
  
  async addSetClass(set_ids, group_id) {
    await this.setGroups.sync(); 
  
    if (!Array.isArray(set_ids) || set_ids.length === 0) {
      throw new Error("El array de sets está vacío o no es válido.");
    }
    const setsToInsert = set_ids.map(set_id => ({
      set_id: set_id,
      group_id: group_id
    }));
  
    const createdGroups = await this.setGroups.bulkCreate(setsToInsert);
  
    if (!createdGroups || createdGroups.length === 0) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
  
    return createdGroups;
  }
  
  async deleteSetClass(set_id, group_id) {
    await this.setGroups.sync();
    
    const deletedRows = await this.setGroups.destroy({
      where: {
        set_id: set_id,
        group_id: group_id
      }
    });
  
    if (deletedRows === 0) {
      throw new Error("No se encontró la relación set-group para eliminar."); 
    }
  
    return { message: "Registro eliminado correctamente." };
  }
  

  async getAllGroups() {
    await this.group.sync();
    return await this.group.findAll();
  }

  async getGroupById(id) {
      await this.group.sync();
    const foundGroup = await this.group.findAll({
      where: {
        id: id,
      },
      
  });
    if (!foundGroup) {
      throw new ErrorException(ErrorCode.NotFound);
    }
    return foundGroup;
  }

  async getGroupByCode(code) {
    await this.group.sync();
    const foundGroup = await this.group.findOne(
      {where:{code:code}}
    );
    if (!foundGroup) {
      throw new ErrorException(ErrorCode.NotFound);
    }
    return foundGroup;
  }

  async getCodeById(id) {
    try {
        // Verifica si la sincronización del grupo es realmente necesaria
        // await this.group.sync(); // Si es necesario hacerlo, mantenlo; si no, elimínalo.
        
        // Buscar el código asignado al grupo con el ID proporcionado
        const foundCode = await this.group.findOne({
            where: { id: id },  // Filtra por el ID
            attributes: ['code'],  // Solo trae el campo 'code'
        });

        if (!foundCode) {
            // Si no se encuentra el grupo, lanza una excepción con un error 'NotFound'
            throw new ErrorException(ErrorCode.NotFound);
        }

        // Retorna el código encontrado
        return foundCode;
    } catch (error) {
        // Si ocurre un error, lo puedes manejar de esta forma para un mejor seguimiento
        throw error;  // O personaliza el manejo de errores aquí según tus necesidades
    }
}


}

module.exports = groupDAO;
