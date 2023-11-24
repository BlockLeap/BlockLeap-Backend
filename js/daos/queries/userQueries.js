"use strict";

module.exports = {
  getUsers: `SELECT * FROM user`,

  getUserById: `SELECT * FROM user where id like ?`,
};
