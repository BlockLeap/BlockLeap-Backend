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

  async addLevelClass(level,groupId) {
    
    await this.classlevel.sync();
  
    const createdGroup = await this.classlevel.create({

      id:level.id,       
      user:level.user,          
      category:level.category,      
      self:level.self,          
      description:level.description,   
      title:level.title,         
      data:level.data,         
      minBlocks:level.minBlocks,     
      idClase:groupId.id       

    });

    if (!createdClass) {
      throw new ErrorException(ErrorCode.CantCreate);
    }
    return createdClass;
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
