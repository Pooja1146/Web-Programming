var sql=require('./mysqlconnect');

var orderdetails=function(orderdetails){
    // this.orderdetailid=orderdetails.orderdetailid;
    this.orderid=orderdetails.orderid;
    this.flowerid=orderdetails.flowerid;
    this.quantity=orderdetails.quantity;
};

orderdetails.createorderdetails=function(neworderdetails,result){
    console.log("new orderdetails tobe added");
    console.log(neworderdetails);

    sql.query("INSERT INTO ORDERDETAILS SET ?",neworderdetails,function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res.orderdetailid);
            result(null,res.orderdetailid);
        }
    });
};

orderdetails.getAllOrderDetails=function(result){
    console.log("Invoking dal getall orderdetails");

    sql.query("SELECT * FROM ORDERDETAILS",function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
};

orderdetails.getOrderDetailsById=function(orderdetailid,result){
    console.log("invoking getOrderDetailsById");

    sql.query("SELECT * FROM ORDERDETAILS WHERE orderdetailid=?",orderdetailid,function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
}


orderdetails.updateById=function(orderdetailid,orderdetails,result){
    console.log("invoking updateById");

    sql.query("UPDATE ORDERDETAILS SET FLOWERID=? WHERE ORDERDETAILID=?",[orderdetails.flowerid,orderdetailid],function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
}


orderdetails.remove=function(orderdetailid,result){
    console.log("invoking remove function");

    sql.query("DELETE FROM ORDERDETAILS WHERE ORDERDETAILID=?",[orderdetailid],function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res);
            result(null,res);
        }
    });
}
// /api/orderdetails

// /api/orderdetails/1

module.exports=orderdetails;
