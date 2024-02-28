"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");

const cookieParser = require("cookie-parser");
const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const playRouter = require("./routes/playRouter");
const { errorHandler } = require("./error-handler/errorHandler");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.disable("x-powered-by");
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.hsts({ maxAge: 31536000 }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://blockly-demo.appspot.com/static/media/"],
      styleSrc: [
        "'self'",
        "https://fonts.googleapis.com",
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",
        "'unsafe-inline'",
      ],
      "img-src": [
        "'self'",
        "https://blockly-demo.appspot.com/static/media/",
        "data:",
        "blob:",
      ],
    },
  })
);

app.use("/api/level", levelRouter);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);
app.use("/api/play", playRouter);

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.listen(process.env.APP_PORT, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", process.env.APP_PORT);
});

// Front
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Define a catch-all route that serves index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
