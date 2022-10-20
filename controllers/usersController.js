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

    if (resultValidation.isEmpty()) {

      let {name, surname, email, password} = req.body;
      
      db.User.create({
        name: name,
        surname: surname,
        email: email,
        password: bcryptjs.hashSync(password, 10),
        avatar: req.body.filename || 'default.png',
        rolId: 2,
    })
        .then(() => {
          res.redirect('/users/login')
        })
        .catch((error) => console.log(error));
    } else {
    return res.render("register", {
      title: "Register",
      errors: resultValidation.mapped(),
      oldData: req.body,
    });
   }

  return res.redirect("/");

  },
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
    });
  },
  loginProcess: (req, res) => {
    const resultValidation = validationResult(req);
    
    const userToLogin = db.User.findOne({ 
      where : {
        email: req.body.email
      }, 
      })

    if (userToLogin) {
      let isCorrectPassword =  bcryptjs.compareSync(
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
  
//Profile viejo
/*   profile: (req, res) => {
    return res.render("userProfile", {
      title: "Perfil",
      user: req.session.userLogged,
    });
  }, */
  profile: async (req, res) => {
    try {
      let id = req.session.userLogged.id;
      let user = await db.User.findByPk(id);
      return res.render("userProfile", {
        title: "Perfil"
      },
      user);
    } catch (error) {
      console.log(error);
    }
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






