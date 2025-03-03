module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "levelsets",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(100), 
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
        owner_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "user", 
            key: "id",
          },
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
          {
            name: "name",
            using: "BTREE",
            fields: [{ name: "name" }],
          },
          {
            name: "owner_id",
            using: "BTREE",
            fields: [{ name: "owner_id" }],
          },
        ],
      }
    );
  };
  