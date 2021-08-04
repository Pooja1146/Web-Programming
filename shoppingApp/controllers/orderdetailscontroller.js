var orderdetails=require("../dal/orderdetails");

exports.getAll=function(req,res){
    console.log("invoking get all from controller");

    orderdetails.getAllOrderDetails(function(err,orderdetails){
        if(err)
            res.send(err);
        res.send(orderdetails);
    });
};

exports.getBy=function(req,res){
    console.log("invoking get by from controller");

    orderdetails.getOrderDetailsById(req.params.id,function(err,orderdetails){
        if(err)
        res.send(err);
        res.json(orderdetails);
    });
};

exports.insert=function(req,res){
    console.log("invoking insert from controller");
    var neworderdetails=new orderdetails(req.body);
    console.log(neworderdetails);

    if(!neworderdetails.flowerid || !neworderdetails.orderid){
        res.status(400).send({ error:true, message: 'Please provide orderdetails' });
    }
    else{
        orderdetails.createorderdetails(neworderdetails,function(err,order){
            if(err){
                res.send(err);
            }
            else{
                res.json(order);
            }
        });
    };
} ;

exports.update=function(req,res){
    console.log("invoking update from controller");

    orderdetails.updateById(req.params.id,new orderdetails(req.body),function(err,orderdetails){
        if(err)
        res.send(err);
        res.json(orderdetails);
    });
};

exports.remove=function(req,res){
    console.log('invoking remove from controller');

    orderdetails.remove(req.params.id,function(err,msg){
        if(err)
        res.send(err);
        res.json(msg);
    });
};