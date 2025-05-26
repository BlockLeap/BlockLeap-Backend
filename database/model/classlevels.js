module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "classlevels",
      {
        id_clase: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "id_clase",
            key: "id",
          },
        },
        id_nivel: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "id_nivel",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "classlevels",
        timestamps: false,
        indexes: [
            {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id_clase" }, { name: "id_nivel" }],
          },
        ],
      }
    );
  };
  