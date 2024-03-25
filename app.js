"use strict";

require("dotenv").config();

const express = require("express");
const path = require('path');
const cors = require("cors");
const helmet = require("helmet");

const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const { errorHandler } = require("./error-handler/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/level", levelRouter);
app.use("/api/user", userRouter);
app.use("/api/group", groupRouter);

app.disable("x-powered-by");
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.hsts({ maxAge: 31536000 }));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://blockly-demo.appspot.com/static/media/"],
      styleSrc: ["'self'", "https://fonts.googleapis.com", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css", "'unsafe-inline'" ],
      "img-src": ["'self'", "https://blockly-demo.appspot.com/static/media/", "data:", "blob:"]
    },
  })
);

app.use((error, request, response, next) => {
  errorHandler(error, request, response, next);
});

app.listen(process.env.APP_PORT, function (error) {
  if (error) console.log("The server could not be connected");
  else console.log("Server listening port", process.env.APP_PORT);
});

// Front
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a catch-all route that serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


module.exports = app;
