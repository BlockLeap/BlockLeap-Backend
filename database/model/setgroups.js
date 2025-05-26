module.exports = function (sequelize, DataTypes) {
    return sequelize.define(
      "setgroups",
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
        group_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true, 
          autoIncrement: false, 
          references: {
            model: "group_id",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "setgroups",
        timestamps: false,
        indexes: [
            {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [{ name: "set_id" }, { name: "group_id" }],
          },
        ],
      }
    );
  };
  