var order=require("../dal/orders");

exports.getAll=function(req,res){
    console.log("invoking get all from controller");

    order.getAllOrders(function(err,order){
        if(err)
            res.send(err);
        res.json(order);
    });
};

exports.getBy=function(req,res){
    console.log("invoking get by from controller");

    order.getOrderById(req.params.id,function(err,order){
        if(err)
         res.send(err);
        res.json(order);
    });
};

exports.insert=function(req,res){
    console.log("invoking insert from controller");
    var neworder=new order(req.body);
    console.log(neworder);

    if(!neworder.customerid || !neworder.amount){
        res.status(400).send({ error:true, message: 'Please provide order' });
    }
    else{
        order.createorder(neworder,function(err,order){
            if(err){
                res.send(err);
            }
            else{
                res.json(neworder);
            }
        });
    };
} ;

exports.update=function(req,res){
    console.log("invoking update from controller");
    // console.log(req.params.id);
    order.updateById(req.params.id,new order(req.body),function(err,order){
        if(err)
        res.send(err);
        res.json(order);
    });
};

exports.remove=function(req,res){
    console.log('invoking remove from controller');

    order.remove(req.params.id,function(err,msg){
        if(err)
        res.send(err);
        res.json(msg);
    });
};

