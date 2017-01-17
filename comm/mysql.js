var mysql=require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'UYyuedu'
});

connection.connect();
module.exports=connection;