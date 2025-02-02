module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "setlevels",
      {
        set_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "set_id",
            key: "id",
          },
        },
        level_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "level_id",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "setlevels",
        timestamps: false,
        indexes: [
            {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "set_id" }, { name: "level_id" }],
          },
        ],
      }
    );
  };
  