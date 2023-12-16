"use strict";

const express = require("express");
const path = require("path");
const cors = require("cors"); // Importa el middleware CORS

const apiRouter = require("./router/apiRouter");
const levelRouter = require("./router/levelRouter");
const userRouter = require("./router/userRouter");

const app = express();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors()); // Usa el middleware CORS
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);
app.use("/level", levelRouter);
app.use("/user", userRouter);

app.get("/", function (request, response) {
  response.redirect("level/categories");
});

// app.get("/login", function (request, response){
//   console.log("Servidor funciona")
//   response.send("Recibido");
// })

app.listen(3000, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", 3000);
});
