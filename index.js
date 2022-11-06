const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

//User logged in or not
let isLoggedIn = true;

app.get('/',(req,res)=>{
    if(isLoggedIn){
        res.render('home.ejs');
    }
    else{
        res.render('signup.ejs');
    }
});


app.get('/login', (req,res)=>{
    res.render('login.ejs');
});


app.listen(port,()=>{
    console.log(`Yeah bro!! \nI am listening to port ${port}`);
})