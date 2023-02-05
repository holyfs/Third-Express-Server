const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const users=[];


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req, res, next)=>{
    console.log(users);
    res.render('add-user');
});

app.get('/users',(req, res, next)=>{
    res.render('users',{users:users})
});


app.post('/add-user',function(req,res){
    const body = req.body.name
    console.log(body);
    users.push({name: body})
    res.redirect('/');
});


app.listen(3000);