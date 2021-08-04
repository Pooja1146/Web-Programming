

// API routes for Controller callback functions
//a Separate responsibility  for navigation

var orderController=require("./controllers/ordercontroller");
var orderdetailsController=require("./controllers/orderdetailscontroller");

//get the app object of express from server.js

module.exports=function(app){
    //Tasks  HTTP request Mapping
    //http://localhost:9898/api/tasks

    app.route("/api/orders")
    .get(orderController.getAll)             //http://localhost:9898/api/tasks  GET
    .post(orderController.insert);           //http://localhost:9898/api/tasks      POST

    app.route("/api/orders/:id")
      .get(orderController.getBy)            //http://localhost:9898/api/tasks/:id    GET
      .put(orderController.update)           //http://localhost:9898/api/tasks/:id    PUT
      .delete(orderController.remove);       //http://localhost:9898/api/tasks/:id   DELETE

    //Flowers HTTP request Mapping    
    app.route("/api/orderdetails")              
    .get(orderdetailsController.getAll)           //http://localhost:9898/api/flowers/       GET  
    .post(orderdetailsController.insert);         //http://localhost:9898/api/flowers/       POST

    app.route('/api/orderdetails/:id')
    .get(orderdetailsController.getBy)           //http://localhost:9898/api/flowers/:id    GET
    .put(orderdetailsController.update)          //http://localhost:9898/api/flowers/:id    PUT
    .delete(orderdetailsController.remove);      //http://localhost:9898/api/flowers/:id    DELETE    

    //Orders HTTP request Mapping 
    //OrderItems HTTP request Mapping 
    //ShopingCart HTTP request Mapping 
    //Payments HTTP request Mapping 
};


  //Express Routing is a mechanism to mapping incomming HTTP requests with appropriate controller functions
