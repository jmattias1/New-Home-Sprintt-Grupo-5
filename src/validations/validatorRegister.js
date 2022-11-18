const {check} = require('express-validator');
const path = require('path');
const fs = require('fs')


module.exports = [
  check("name")
    .notEmpty()
    .withMessage("Debe ingresar su Nombre")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("El Nombre debe contener solo letras")
    .isLength({
      min: 2,
      max: 25,
    })
    .withMessage("Debe ingresar entre 2 y 25 caracteres"),
  check("surname")
    .notEmpty()
    .withMessage("Debe ingresar su Apellido")
    .bail()
    .isAlpha("en-US", { ignore: " " })
    .withMessage("El Apellido debe contener solo letras")
    .isLength({
      min: 5,
      max: 25,
    })
    .withMessage("Debe ingresar entre 2 y 25 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("Debe ser un email válido")
    .bail(),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .bail()
    .isLength({
      min: 4,
      max: 12,
    })
    .withMessage("La contraseña debe contener entre 4 y 8 caracteres"),
  check("avatar").custom((value, { req }) => {
    let file = req.file;
    if (!file) {
      throw new Error("Seleccione una foto de perfil");
    }
    return true;
  }),
];