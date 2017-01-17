var express = require('express');
var router = express.Router();
var mysql = require('../comm/mysql');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(rootPath+"/views/index/index.html");
});

module.exports = router;
