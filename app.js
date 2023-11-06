"use strict";

const express = require("express");
const path = require("path");
const levelRouter = require("./router/levelRouter");
const FactoryDAOS = require("./js/daos/DAOFactory")
const DAOFactory = new FactoryDAOS();
const app = express();

app.use("/level", levelRouter);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use("./css", express.static(path.resolve(__dirname, "public/css")));
app.use("./images", express.static(path.resolve(__dirname, "public/images")));

app.get("/", function (request, response) {
  response.redirect("/level/start");
});

app.get("/community", function(request,response){
  response.status(200);
  let DAOCommty = DAOFactory.getCommunityDAO();
  DAOCommty.getLevels()
  .then(result => {
    result = JSON.parse(JSON.stringify(result));
    console.log(result); // Aquí obtendrás el resultado una vez que la promesa se resuelva.
    response.render("community", {result: result});
  })
  .catch(error => {
    console.error(error); // Manejar errores si la promesa es rechazada.
  });
});

app.listen(3000, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", 3000);
});
