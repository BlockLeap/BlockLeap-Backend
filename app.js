"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const levelRouter = require("./router/levelRouter");
app.use("/level", levelRouter);

app.get("/", function (request, response) {
  response.redirect("/level/start");
});

app.listen(3000, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", 3000);
});
