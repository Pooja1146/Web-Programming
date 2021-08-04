//a Separate responsibility  for  mysql connection string
// database connectivity
var mysql= require('mysql');
//define connection string
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'sundaytask'
});
connection.connect(function(err){
    if(err) console.log("error in connection");
    console.log("Connected!");

});
 module.exports=connection;
// var getAll=function(){
//     var selectAllQuery="select * from customers ";
//     connection.query(selectAllQuery,function(err, data){
//         if(err){
//             console.log("error : "+err);
//         }
//         else
//         {
//             console.log(data);
//         }
//     });
// }
// getAll();