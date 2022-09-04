const {check} = require('express-validator');

module.exports = [
    check('email')
        .notEmpty().withMessage('El email es obligatorio').bail()
        .isEmail().withMessage('Este email no se encuentra registrado'),
    check('password')
         .notEmpty().withMessage('La contraseña es obligatoria')

]

