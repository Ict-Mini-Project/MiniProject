const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/hoteldb');
const Schema=mongoose.Schema;

var NewContactSchema=new Schema({

    name:String,
    email:String,
    message:String
});
var Contactdata=mongoose.model('contact_data',NewContactSchema);
module.exports=Contactdata;