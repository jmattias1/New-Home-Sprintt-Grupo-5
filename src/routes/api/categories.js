
let express = require("express");
var router = express.Router();
const  {all}  = require("../../controllers/api/apiCategoryController");

/* / */
router.get("/", all);
module.exports = router;
