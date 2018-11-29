const express = require('express');
const chalk = require('chalk');                         
const path = require('path');
var app = new express();                                    


var nav=[{link:'/',title:'Home'},
        {link:'/menu',title:'Menu'},
        {link:'/login',title:'Login'},
        {link:'/aboutus',title:'About Us'},
        {link:'/contacts',title:'Contacts'}];

app.use(express.static(path.join(__dirname,'/public')));


const menuRoute = require('./src/routes/menuRoute')(nav);
app.use('/menu',menuRoute);

const aboutRoute = require('./src/routes/aboutRoute')(nav);
app.use('/aboutus',aboutRoute);

const contactRoute = require('./src/routes/contactRoute')(nav);
app.use('/contacts',contactRoute);


app.set('views','./src/views');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('index',{nav});
});

app.get('/discover',function(req,res){
    res.render('features',{nav});
});
        


app.listen(3000,function(){                              
    console.log(chalk.red('Listening on port: ')+chalk.green('3000'));
});