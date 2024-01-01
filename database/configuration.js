const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("articoding", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.define(
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

sequelize.define(
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

sequelize.define(
  "category",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "category",
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

sequelize.define(
  "group",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    sequelize,
    tableName: "group",
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

sequelize.define(
  "level",
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
      allowNull: false,
      references: {
        model: "category",
        key: "id",
      },
    },
    self: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "level",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "level",
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

sequelize.define(
  "play",
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
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    attempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "play",
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

sequelize.define(
  "set",
  {
    group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "group",
        key: "id",
      },
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: "set",
    timestamps: false,
    indexes: [
      {
        name: "group",
        using: "BTREE",
        fields: [{ name: "group" }, { name: "user" }],
      },
      {
        name: "user",
        using: "BTREE",
        fields: [{ name: "user" }],
      },
    ],
  }
);

sequelize.define(
  "user",
  {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(25),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "user",
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

exports.sequelize = sequelize;
