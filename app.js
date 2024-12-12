"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const helmet = require("helmet");
const levelRouter = require("./routes/levelRouter");
const userRouter = require("./routes/userRouter");
const groupRouter = require("./routes/groupRouter");
const playRouter = require("./routes/playRouter");
const { errorHandler } = require("./error-handler/errorHandler");
const logger = require("./logger");
const XAPISingleton = require("./xAPI/xapi");

const app = express();
const CLIENT_URL = `${process.env.CORS_CLIENT_PROTOCOL}://${process.env.CORS_CLIENT_DOMAIN}:${process.env.CORS_CLIENT_PORT}`;

app.use(cors({ credentials: true, origin: CLIENT_URL}));

app.use(express.static(path.join(path.dirname(__dirname), "BlockLeap-Client", "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
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
        "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
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

app.post("/api/statistics/", async(req,res,next) =>{
  try{
    const statement = req.body;
    await XAPISingleton.sendStatement(statement);
    res.json({ message: "Statement received successfully" });
  } catch(err){
    next(err);
  }
});


// Front
// Serve static files from the 'public' directory
app.use(express.static(path.join(path.dirname(__dirname), "BlockLeap-Client", "public")));

// Define a catch-all route that serves index.html
app.get("*", (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(path.dirname(__dirname), "BlockLeap-Client", "public", "index.html"));
});

app.use((err, req, res, next) => {
  errorHandler(err, req, res, next);
});

app.listen(process.env.APP_PORT, function (error) {
  if (error) logger.error("The server could not be connected");
  else logger.info(`Server listening port ${process.env.APP_PORT}`);
});

module.exports = app;
