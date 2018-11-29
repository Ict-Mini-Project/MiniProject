const express = require('express');
const chalk = require('chalk');                         
const path = require('path');
var app = new express();                                    


var nav=[{link:'/',title:'Home'},
        {link:'/features',title:'Features'},
        {link:'/menu',title:'Menu'},
        {link:'/login',title:'Login'},
        {link:'/aboutus',title:'About Us'},
        {link:'/contacts',title:'Contacts'}];

app.use(express.static(path.join(__dirname,'/public')));


app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{nav});
});
        


app.listen(3000,function(){                              
    console.log(chalk.red('Listening on port: ')+chalk.green('3000'));
});