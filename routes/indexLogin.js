var express=require("express");
var mysql=require("../comm/mysql");
var crypto=require("crypto");
var router=express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
