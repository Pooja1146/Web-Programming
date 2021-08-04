
var mysql = require('mysql');
var sql=require('./mysqlconnect');
var dbServer={
  host: "localhost",
  user: "root",
  password: 'root123',
  database:'tflstore'
};

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "yourusername",
//     password: "yourpassword"
//   });
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var connection=mysql.createConnection(dbServer);

  //will establish TCP connection with MySQL

connection.connect(function(err){
    console.log(err);  
});

var getAll=function(){
    var selectAllQuery="select * from customers ";
    connection.query(selectAllQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
}
getAll();

var getById=function(id){
    var selectByIdQuery="select * from customers where id="+id;
   connection.query(selectByIdQuery,function(err,data){
       if(err){
           console.log("error : "+err);
       }
       else
       {
           console.log(data);
       }
   });
}
//getById(1);

var insert=function(){
   var insertQuery="INSERT INTO customers values(6,'yash','shah','yash.shah@gmail.com',8528505); ";
   connection.query(insertQuery,function(err,data){
       if(err){
           console.log("error : "+err);
         }
         else{
             console.log(data)
         }
   });
};

//insert();

var update=function(){
    var updateQuery="UPDATE customers SET firstname = 'komal',lastname = 'sonar' , email = 'komal.sonar@gmail.com' WHERE id=6 " ;
    connection.query(updateQuery,function(err, data){
        if(err){
            console.log("error : "+err);
        }
        else
        {
            console.log(data);
        }
    });
};

//update();

var remove=function(){
    var deleteQuery="DELETE FROM customers WHERE id=3"; 
    connection.query(deleteQuery,function(err, data){
       if(err){
           console.log("error : "+err);
       }
       else
       {
           console.log(data);
       }
   });
};

//remove();

