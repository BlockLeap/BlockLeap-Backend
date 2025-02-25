"use strict";

const { ErrorCode } = require("../../error-handler/errorCode");
const { ErrorException } = require("../../error-handler/ErrorException");

class groupDAO {
  sequelize;
  group;
  classlevel;

  constructor(sequelize) {
    this.sequelize = sequelize;
    this.group = sequelize.models.group;
    this.classlevel = sequelize.models.classLevel;
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
      id:level.id,
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
  
  async addSetClass(set_id,group_id) {
    await this.setGroups.sync();
    const createdGroup = await this.setGroups.create({
      set_id: grouset_idpName,
      group_id:group_id,

    });
    if (!createdGroup) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
    return createdGroup;
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
