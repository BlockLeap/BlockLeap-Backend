const { ErrorCode } = require("../error-handler/errorCode");
const { ErrorException } = require("../error-handler/ErrorException");
const jwt = require("jsonwebtoken");

function validateToken (req, res, next) {
  try {
    const token = req.cookies.jwt;
    
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