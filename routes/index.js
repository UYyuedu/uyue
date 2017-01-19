var express = require('express');
var router = express.Router();
var mysql = require('../comm/mysql');
var crypto=require("crypto");
var path=require("path")
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(req.session.indexLogin)
    if(req.session.indexLogin=="ok"){
        res.sendFile(path.resolve(__dirname ,"..","views/index/bookbox.html"));

    }else{
        res.sendFile(rootPath+"/views/index/login.html");
    }
});
//router.get("/",function(req,res,next){
//    res.render("index/login")
//})
//router.get("/login",function(req,res,next){
//    res.render("index/login")
//})
router.get("/reg",function(req,res,e){
    res.render("index/reg");
})

router.use("/zhuce",function(req,res,next){
    var username=req.body.username;
    var name=req.body.name;
    var password1=req.body.password1;
    var password2=req.body.password2;
    if(username==""||password1==""||password2==""){
        res.redirect("/error")
    }else{
        mysql.query(`select * from user`,function(error,rows){
            var flag=true;
            for(var i=0;i<rows.length;i++){
                if(rows[i].username==username){
                        flag=false;
                    res.redirect("/error1");
                    break;
                }
            }
            if(flag){
                var reg=/^\d{6,12}$/;
                if(reg.test(password1)){

                if(password1==password2){
                    const md5 = crypto.createHash("md5");
                    md5.update(password1);
                    password1=md5.digest("hex");
                    //md5.update(password2);
                    //password2=md5.digest("hex");
                    mysql.query(`insert into user (username,password,name) values ('${username}','${password1}','${name}')`,function(error,rows){
                        if(error){
                            console.log(error)
                            res.redirect("/error2")
                        }
                        else{
                            res.render("index/login")
                        }
                    })
                }else{
                    res.redirect("/error")
                    }
                }else{
                    res.redirect("/error3")
                }

            }

        })
    }
})
module.exports = router;
