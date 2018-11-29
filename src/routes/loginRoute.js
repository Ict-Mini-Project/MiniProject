const express = require('express');
const login = express.Router();

function router(nav){

    login.route('/')
    .get((req,res)=>{

    res.render('login',{nav})
});


return login;  
};

module.exports=router;