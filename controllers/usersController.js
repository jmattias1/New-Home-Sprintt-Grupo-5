    const bcryptjs = require ('bcryptjs');
const {validationResult} = require('express-validator');

/* User de models */
const User = require ('../models/User');

module.exports = {

    register : (req,res) => {
        return res.render('register',{
            title: 'Register'
        })
    },

  processRegister: (req, res) => {
    const { name, surname, password, email, country, province, city,rolId} =req.body;
    let rol = db.Rol.findAll({
      attributes: ["id", "name"],
      order: ["name"],
    });
    const {id} = db.User.create({
      name: name?.trim(),
      surname: surname?.trim(),
      email: email?.trim(),
      password: bcryptjs.hashSync(password, 10),
      country: country?.trim(),
      city: city?.trim(),
      province: province?.trim(),
      avatar: req.file?.filename,
      rolId: rolId,
    });
    
    let addressCreate = db.Address.create({
      country: country?.trim(),
      city: city?.trim(),
      province: province?.trim(),
      userId: id,
    });
    Promise.all([addressCreate, rol]).then(
      ([addressCreate, rol]) => {
      ({
        addressCreate,
        rol
      })
      return res.redirect('profile')
      }
      
    );
  },

    login : (req,res) => {
        return res.render('login',{
            title: 'Login'
        })
    },

    loginProcess: (req,res) => {
        let userToLogin = User.findByTag('email', req.body.email);

        if (userToLogin) {
            let isCorrectPassword = bcryptjs.compareSync (req.body.password , userToLogin.password);
            if (isCorrectPassword){
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.remember_user) {
                    res.cookie ('userEmail' , req.body.email, {maxAge: (1000 * 60) * 2});
                }
                return res.redirect ('/users/profile')
            }
            return res.render ('login', {
                title: 'Login',
                errors: {
                    email: {
                        msg : 'las creedenciales son invalidas'
                    }
                }
            });
        }

        return res.render ('login', {
            title: 'Login',
            errors: {
                email: {
                    msg : 'Este email no se encuentra en nuestra base de datos'
                }
            }
        });
    },

    profile: (req,res) => {
        return res.render ('userProfile', {
            title: 'Perfil',
            user: req.session.userLogged
        })
    },
    logout : (req,res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
}
