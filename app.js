"use strict";

const express = require("express");
const path = require("path");

const levelRouter = require("./router/levelRouter");
const categoryRouter = require("./router/categoryRouter");
const communityRouter = require("./router/communityRouter");
const app = express();

app.use("/category", categoryRouter);
app.use("/level", levelRouter);

app.use("/community", communityRouter);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (request, response) {
  response.redirect("/category/all");
});

app.listen(3000, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", 3000);
});
