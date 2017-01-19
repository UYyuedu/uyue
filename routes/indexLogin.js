var express=require("express");
var mysql=require("../comm/mysql");
var crypto=require("crypto");
var router=express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
//    res.render("index/login");
//});
//router.use("/zhuce",function(req,res,next){
//    var name=req.body.name;
//    var username=req.body.username;
//    var password1=req.body.password1;
//    var password2=req.body.password2;
//    if(username==""||(password1==""||password2=="")){
//        res.redirect("/error") ;     //弹出提示账号不能为空
//        //break;
//    }
//    if(password1!==password2){
//        res.redirect("/error")     //两次密码不一样
//        //break;
//    }
//
//    if(username!==""&&password1==password2){
//        mysql.query(`select * from user`,function(error,rows){
//            for(var i=0;i<=rows.length;i++){
//                if(username==rows[i].username){
//                    res.redirect("/error");
//                }else{
//                    return username;
//                }
//            }
//            return username;
//        })
//        console.log(password1.length);
//        if(6<=password1.length&&password1.length<=12){
//            const md5 = crypto.createHash("md5");
//            md5.update(password1);
//            password1=md5.digest("hex");
//            md5.update(password2);
//            password2=md5.digest("hex");
//            mysql.query(`insert into user (username,password,name) values('${username}','${password1}','${name}')`,function(error,rows){
//                if(error){
//                    res.redirect("/error");
//
//                }else{
//                    res.redirect("/");
//                }
//
//            })
//        } else{
//            res.redirect("/error");
//        }
//    }
//})
router.use("/check",function(req,res,next){
    var username=req.body.username;
    var password=req.body.password;
    const md5 = crypto.createHash("md5");
    md5.update(password);
    password=md5.digest("hex");
    if(username!=""||password!=""){
        mysql.query(`select * from user`,function(error,rows){
            var flag=true;
            for(var i=0;i<rows.length;i++){
                if(username==rows[i].username){
                    if(password==rows[i].password){
                        flag=false;
                        req.session.indexLogin= "ok";
                        req.session.username=username;
                        req.session.uid=rows[i].id
                        res.redirect("/")
                        break;
                    }
                }
            }
            if(flag){
                res.redirect("/error")  //弹出提示密码或用户名错误
            }
        })
    }
});
module.exports = router;
