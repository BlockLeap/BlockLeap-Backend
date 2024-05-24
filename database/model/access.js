module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "access",
    {
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
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
      mode: {
        type: DataTypes.STRING(25),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "access",
      timestamps: false,
      indexes: [
        {
          name: "user",
          using: "BTREE",
          fields: [{ name: "user" }, { name: "level" }],
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
