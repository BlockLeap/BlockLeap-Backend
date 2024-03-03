"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const { errorHandler } = require("./error-handler/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(
        "/worker.js",
        {
          scope: "./",
        }
      );
      if (registration.installing) {
        console.log("Service worker installing");
      } else if (registration.waiting) {
        console.log("Service worker installed");
      } else if (registration.active) {
        console.log("Service worker active");
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
    }
  }
};

app.use("/api/level", levelRouter);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);

app.use((error, request, response, next) => {
  errorHandler(error, request, response, next);
});

app.listen(process.env.APP_PORT, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", process.env.APP_PORT);
});

registerServiceWorker();

module.exports = app;
