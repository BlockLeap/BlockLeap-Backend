var DataTypes = require("sequelize").DataTypes;
var _access = require("./access");
var _assigned = require("./assigned");
var _category = require("./category");
var _group = require("./group");
var _level = require("./level");
var _classlevel = require("./classlevel");
var _play = require("./play");
var _set = require("./set");
var _user = require("./user");

function init(sequelize) {
  var access = _access(sequelize, DataTypes);
  var assigned = _assigned(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var level = _level(sequelize, DataTypes);
  var play = _play(sequelize, DataTypes);
  var set = _set(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  var classlevel= _classlevel(sequelize, DataTypes);


  level.belongsTo(category, {
    as: "category_category",
    foreignKey: "category",
  });
  category.hasMany(level, { as: "levels", foreignKey: "category" });
  assigned.belongsTo(group, { as: "group_group", foreignKey: "group" });
  group.hasMany(assigned, { as: "assigneds", foreignKey: "group" });
  set.belongsTo(group, { as: "group_group", foreignKey: "group" });
  group.hasMany(set, { as: "sets", foreignKey: "group" });
  access.belongsTo(level, { as: "level_level", foreignKey: "level" });
  level.hasMany(access, { as: "accesses", foreignKey: "level" });
  assigned.belongsTo(level, { as: "level_level", foreignKey: "level" });
  level.hasMany(assigned, { as: "assigneds", foreignKey: "level" });
  level.belongsTo(level, { as: "self_level", foreignKey: "self" });
  level.hasMany(level, { as: "levels", foreignKey: "self" });
  play.belongsTo(level, { as: "level_level", foreignKey: "level" });
  level.hasMany(play, { as: "plays", foreignKey: "level" });
  access.belongsTo(user, { as: "user_user", foreignKey: "user" });
  user.hasMany(access, { as: "accesses", foreignKey: "user" });
  level.belongsTo(user, { as: "user_user", foreignKey: "user" });
  user.hasMany(level, { as: "levels", foreignKey: "user" });
  play.belongsTo(user, { as: "user_user", foreignKey: "user" });
  user.hasMany(play, { as: "plays", foreignKey: "user" });
  set.belongsTo(user, { as: "user_user", foreignKey: "user" });
  user.hasMany(set, { as: "sets", foreignKey: "user" });

  return {
    access,
    assigned,
    category,
    group,
    level,
    play,
    set,
    user,
  };
}

module.exports = init;
module.exports.init = init;
module.exports.default = init;
