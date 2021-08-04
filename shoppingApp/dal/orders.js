var sql=require("./mysqlconnect");
const orderdetails = require("./orderdetails");

var order=function(order){
    this.orderid=order.orderid;
    this.orderdate=order.orderdate;
    this.customerid=order.customerid;
    this.amount=order.amount;
};

order.createorder=function(neworder,result){
    console.log("invoking create order");

    sql.query("INSERT INTO ORDERS SET ?",neworder,function(err,res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log(res.orderid);
            result(null,res.orderid);
        }
    });
};


order.getAllOrders=function(result){
    console.log("invoking get all orders");

    sql.query("SELECT * FROM ORDERS",function(err,res){
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


order.getOrderById=function(orderid,result){
    console.log("invoking get order by id");

    sql.query("Select * from orders where orderid = ? ", orderid, function (err, res){
        if(err){
            console.log(err);
            result(err,null);
        }
        else{
            console.log();
            result(null,res);
        }
    });
};

order.updateById=function(orderid,order,result){
    console.log("invoking update by id");

    sql.query("UPDATE ORDERS SET CUSTOMERID=? WHERE ORDERID=?",[order.customerid,orderid],function(err,res){
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


order.remove=function(orderid,result){
    console.log("invoking remove function");

    sql.query("DELETE FROM ORDERS WHERE ORDERID=?",[orderid],function(err,res){
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



module.exports=order;