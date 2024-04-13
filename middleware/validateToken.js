const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");
const jwt = require("jsonwebtoken");

function validateToken (req, res, next) {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      throw new ErrorException(ErrorCode.Unauthorized, "No se encontró el token JWT");
    }
    const validPayload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!validPayload) {
      throw new ErrorException(ErrorCode.Unauthorized);
    }
    next();
  } catch (err) {
    next(err);
  }
};
module.exports = {
  validateToken
};