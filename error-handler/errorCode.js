class ErrorCode {
  static get Unauthorized() {
    return "Credenciales inválidas";
  }

  static get NotFound() {
    return "No se ha podido encontrar";
  }

  static get InternalServerError() {
    return "Error interno del servidor";
  }

  static get UserNotFound() {
    return "Usuario no existe";
  }

  static get CantCreate() {
    return "Error al crear";
  }

  static get CantUpdate() {
    return "Error al modificar";
  }

  static get WrongPassword() {
    return "Usuario no existe";
  }

  static get BadRequest() {
    return "Solicitud incorrecta";
  }

  static get Conflict() {
    return "Ya existe";
  }
}

module.exports = {
  ErrorCode,
};
