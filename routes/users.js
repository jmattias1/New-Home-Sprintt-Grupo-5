var express = require('express');
var router = express.Router();

/* Controller */
const { register, processRegister, login, loginProcess , profile} = require('../controllers/usersController')

/*/users */

/* /register*/

router
    .get('/register', register)
    .post ('/register', processRegister)

/* /login */

router
    .get ('/login', login)
    .post ('/login', loginProcess);

/* Profile */

router
    .get ('/profile', profile);


    







module.exports = router;
