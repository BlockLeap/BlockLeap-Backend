"use strict";

const port = 3001;

const express = require("express");
const path = require("path");
const cors = require("cors");

const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/level", levelRouter);
app.use("/api/user", userRouter);

app.use((error, request, response, next) => {
  console.error("Error inesperado:", error.message);
  response.status(500).json({ error: "Error interno del servidor" });
});

app.listen(port, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", port);
});
