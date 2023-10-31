"use strict";

const express = require("express");
const path = require("path");
const mysql = require("mysql");
const configuration = require("./database/configuration");

const levelDAO = require("./js/daos/levelDAO");

const pool = mysql.createPool(configuration.connection);

let levelDao = new levelDAO(pool);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const level = {
  name: "1",
  rows: 3,
  columns: 6,
  objects: [],
};

app.get("/", function (request, response) {
  levelDao.createLevel(JSON.stringify(level));
  let a = levelDao.getLevelById(1);
  response.render("index", { level: a });
});

app.listen(3000, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", 3000);
});
