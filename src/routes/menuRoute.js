const express = require('express');
const menu = express.Router();

function router(nav){

    menu.route('/')
    .get((req,res)=>{

    res.render('menu',{nav})
});


return menu;  
};

module.exports=router;