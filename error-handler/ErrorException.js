const { ErrorCode } = require("./errorCode");

class ErrorException extends Error {
  status = null;
  metaData = null;
  constructor(code = ErrorCode.UnknownError, metaData = null) {
    super(code);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = code;
    this.status = 500;
    this.metaData = metaData;
    switch (code) {
      case ErrorCode.BadRequest:
        this.status = 400;
        break;
      case ErrorCode.Unauthorized:
        this.status = 401;
        break;
      case ErrorCode.UserNotFound:
      case ErrorCode.NotFound:
        this.status = 404;
        break;
      case ErrorCode.Conflict:
        this.status = 409;
        break;
      case ErrorCode.InternalServerError:
      case ErrorCode.CantCreate:
        this.status = 500;
        break;
      default:
        this.status = 500;
    }
  }
}

module.exports = {
  ErrorException,
};
