class ErrorCode {
    static get Unauthorized() {
        return 'Credenciales inválidas';
    }
    
    static get NotFound() {
        return 'No se ha podido encontrar';
    }
    
    static get InternalServerError() {
        return 'Error interno del servidor';
    }

    static get NotUserFound() {
        return 'Usuario no existe';
    }

    static get CantCreate(){
        return 'Error al crear';
    }

    static get WrongPassword() {
        return 'Usuario no existe';
    }

}

module.exports = {
    ErrorCode
};

