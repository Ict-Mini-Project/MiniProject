const express = require('express');
const Orderdata=require("../model/orderdata")
const order = express.Router();

function router(nav){

    order.route('/')
    .get((req,res)=>{

    res.render('order',{
        nav
    });


});
order.route('/add')
.get((req,res)=>{
    var item={
    orderdate:req.param("orderdate"),
    name:req.param("name"),
    phoneno:req.param("phoneno"),
    foodcode:req.param("foodcode"),
    address:req.param("address")
    }
    var order=new Orderdata(item);
    order.save();
    res.redirect('/order')

});

return order;  
};

module.exports=router;