module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "leveltags",
      {
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
        tag: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "tag",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "leveltags",
        timestamps: false,
        indexes: [
            {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "level_id" }, { name: "tag" }],
          },
        ],
      }
    );
  };
  