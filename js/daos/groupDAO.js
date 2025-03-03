"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class groupDAO {
  sequelize;
  group;
  classlevel;
  setGroups;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.group = sequelize.models.group;
    this.classlevel = sequelize.models.classLevel;
    this.setGroups = sequelize.models.setgroups;
  }

  async createGroup(groupName) {
    await this.group.sync();
    const createdGroup = await this.group.create({
      name: groupName,
    });
    if (!createdGroup) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
    return createdGroup;
  }


  
  async addLevelClass(levels, group) {
    await this.classlevel.sync(); 
  
    if (!levels || levels.length === 0) {
      throw new ErrorException(ErrorCode.InvalidData); 
    }
  
    const levelData = levels.map(level => ({

      user: level.user,          
      category: level.category,      
      self: level.self,          
      description: level.description,   
      title: level.title,         
      data: level.data,         
      minBlocks: level.minBlocks,     
      idClase: group[0].id 
    }));
  
   
    const createdLevels = await this.classlevel.bulkCreate(levelData);
  
    if (!createdLevels || createdLevels.length === 0) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
  
    return createdLevels;
  }
  
  async deleteLevelClass(levels, group) {
    await this.classlevel.sync();
    
    if (!levels || levels.length === 0) {
      throw new ErrorException(ErrorCode.InvalidData);
    }
  
    // Extraer todos los IDs de los niveles a eliminar
    const levelIds = levels.map(level => level.id);
  
    // Ejecutar el destroy usando el operador 'in' para eliminar múltiples niveles
    const deletedCount = await this.classlevel.destroy({
      where: {
        id: levelIds, // Aquí pasamos el array de IDs de los niveles
        idClase: group[0].id
      }
    });
  
    if (!deletedCount) {
      throw new ErrorException(ErrorCode.CantDelete);
    }
    
    return { deleted: deletedCount };
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
