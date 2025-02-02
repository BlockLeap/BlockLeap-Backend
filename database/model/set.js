module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "set",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "id",
            key: "id",
          },
        },
        owner_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "owner_id",
            key: "id",
          },
        },
        name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "levelsets",
        timestamps: false,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  };
  