
let express = require("express");
var router = express.Router();
const { totals } = require("../../controllers/api/indexController");

/* / */
router.get("/totals", totals);
module.exports = router;
