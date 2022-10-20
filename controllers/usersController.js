const db = require("../database/models");
const {validationResult} = require('express-validator');
const bcryptjs = require ('bcryptjs');

module.exports = {
  register: (req, res) => {
    return res.render("register", {
      title: "Register",
    });
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        title: "Register",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

  /*   let userInDB = db.User.findByPk(req.body.email)

    if (userInDB) {
      return res.render("register", {
        title: "Register",
        errors: {
          email: {
            msg: "Este email ya esta registrado",
          },
        },
        oldData: req.body,
      });
    } */

    db.User.create({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.body.filename,
  });

  return res.redirect("/");

  },
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
    });
  },
  loginProcess: (req, res) => {
    let userToLogin = db.User.findByPk(req.body.email);

    if (userToLogin) {
      let isCorrectPassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isCorrectPassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 2 });
        }
        return res.redirect("/users/profile");
      }
      return res.render("login", {
        title: "Login",
        errors: {
          email: {
            msg: "las creedenciales son invalidas",
          },
        },
      });
    }

    return res.render("login", {
      title: "Login",
      errors: {
        email: {
          msg: "Este email no se encuentra en nuestra base de datos",
        },
      },
    });
  },

  profile: (req, res) => {
    return res.render("userProfile", {
      title: "Perfil",
      user: req.session.userLogged,
    });
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
  logoutV: (req, res) => {
    return res.render("logout");
  },



};






