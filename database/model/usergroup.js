module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "usergroup",
    {
      group: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: false, 
        references: {
          model: "group",
          key: "id",
        },
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: false, 
        references: {
          model: "user",
          key: "id",
        },
      },
      role: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "usergroup",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "group" }, { name: "user" }],
        },
        {
          name: "group",
          using: "BTREE",
          fields: [{ name: "group" }],
        },
        {
          name: "user",
          using: "BTREE",
          fields: [{ name: "user" }],
        },
      ],
    }
  );
};
