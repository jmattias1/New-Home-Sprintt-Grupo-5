var express = require('express');
var router = express.Router();

/* Controller */
const { register, processRegister, login, loginProcess , profile, logout} = require('../controllers/usersController')

/* Middlewares */
const uploadFile = require ('../middlewares/multerMiddleware')

const userSessionCheck = require('../middlewares/userSessionCheck')

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
    .get ('/profile',userSessionCheck, profile)
    .get ('/logout', logout);


    







module.exports = router;
