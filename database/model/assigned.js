module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "assigned",
    {
      group: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "group",
          key: "id",
        },
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "level",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "assigned",
      timestamps: false,
      indexes: [
        {
          name: "group",
          using: "BTREE",
          fields: [{ name: "group" }, { name: "level" }],
        },
        {
          name: "level",
          using: "BTREE",
          fields: [{ name: "level" }],
        },
      ],
    }
  );
};
