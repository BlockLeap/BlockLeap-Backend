const { ErrorCode } = require("./errorCode");
const { ErrorException } = require("./ErrorException");

function errorHandler(err, req, res, next) {
  console.error("Error occured:", err);
  if (err instanceof ErrorException) {
    res.status(err.status).send(err);
  } else {
    // For unhandled errors
    res.status(500).send({
      code: ErrorCode.UnknownError,
      status: 500,
    });
  }
}

module.exports = {
  errorHandler,
};
