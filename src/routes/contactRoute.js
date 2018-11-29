const express = require('express');
const contact = express.Router();

function router(nav){

    contact.route('/')
    .get((req,res)=>{

    res.render('contact',{nav})
});


return contact;  
};

module.exports=router;