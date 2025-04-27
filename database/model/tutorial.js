module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "tutorial",
      {
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
        },
      },
      {
        sequelize,
        tableName: "tutorial",
        timestamps: false,
        indexes: [
            {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "name" }],
          },
        ],
      }
    );
  };
  