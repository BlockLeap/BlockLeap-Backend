const mysql = require("mysql");

const connection = {
  host: "localhost",
  user: "root",
  password: "",
  database: "articoding",
};

const pool = mysql.createPool(connection);

exports.getPool = () => {
  return pool;
};

exports.connection = connection;
