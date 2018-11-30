const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/hoteldb');
const Schema=mongoose.Schema;

var NewOrderSchema=new Schema({
    orderdate:String,
    name:String,
    phoneno:String,
    foodcode:String,
    address:String
});
var Orderdata=mongoose.model('order_data',NewOrderSchema);
module.exports=Orderdata;