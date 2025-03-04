module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "classLevel",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
      category: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "category",
          key: "id",
        },
      },
      self: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "level",
          key: "id",
        },
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      data: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      minBlocks: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "classlevel",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "user",
          using: "BTREE",
          fields: [{ name: "user" }, { name: "category" }],
        },
        {
          name: "category",
          using: "BTREE",
          fields: [{ name: "category" }],
        },
        {
          name: "self",
          using: "BTREE",
          fields: [{ name: "self" }],
        },
      ],
    }
  );
};
