const { check } = require("express-validator");
const db = require('../database/models')

module.exports = [
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Debe ser un email valido"),
  check("password")
    .custom((value, { req }) => {
      let password = req.body.password;
      if (password) {
      throw new Error("Contraseña incorrecta");
      }
      return true;
    })
    .notEmpty()
    .withMessage("El password es obligatorio"),
];
