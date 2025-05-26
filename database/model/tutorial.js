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
        description: {
          type: DataTypes.STRING(100),
          allowNull: true,
          primaryKey: false, 
          autoIncrement: false, 
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
          primaryKey: false, 
          autoIncrement: false, 
        },
        icon: {
          type: DataTypes.STRING(30),
          allowNull: false,
          primaryKey: false, 
          autoIncrement: false, 
        },
        prio: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: false, 
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
  