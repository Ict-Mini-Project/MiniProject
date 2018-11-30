const express = require('express');
const Contactdata=require("../model/contactdata")
const contact = express.Router();

function router(nav){

    contact.route('/')
    .get((req,res)=>{

    res.render('contact',{
        nav
    })
});
contact.route('/add')
.get((req,res)=>{
    var item={
    name:req.param("name"),
    email:req.param("email"),
    message:req.param("message")
    }
    var contact=new Contactdata(item);
    contact.save();
    res.redirect('/contacts')

});

return contact;  
};

module.exports=router;