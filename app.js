"use strict";

const express = require("express");
const path = require("path");
const mysql = require("mysql");
const configuration = require("./database/configuration");

const DAONivel = require("./js/daos/daoNivel");

const pool = mysql.createPool(configuration.connection);

let daoNivel = new DAONivel(pool);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const nivel = {
  name: "1",
  rows: 5,
  columns: 5,
  objects: [],
};

app.get("/", function (request, response) {
  daoNivel.createLevel(JSON.stringify(nivel));
  response.render("index");
});

app.listen(3000, function (error) {
  if (error) console.log("El servidor no se ha podido conectar");
  else console.log("Servidor ejecutandose en el puerto", 3000);
});
