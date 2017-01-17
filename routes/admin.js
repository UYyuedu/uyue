var express = require('express');
var mysql=require("../comm/mysql");
var crypto=require("crypto");
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("admin/index")
});
module.exports = router;
