var express = require('express');
var router = express.Router();

/* Controller */
const { register, processRegister, login, loginProcess , profile} = require('../controllers/usersController')

/* Middlewares */
const uploadFile = require ('../middlewares/multerMiddleware')

/*/users */
/* /register*/

router
    .get('/register', register)
    .post ('/register', uploadFile.single('avatar'), processRegister)

/* /login */

router
    .get ('/login', login)
    .post ('/login', loginProcess);

/* Profile */

router
    .get ('/profile', profile);


    







module.exports = router;
