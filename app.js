const express = require('express');
const app = express();
const todo = require('./controllers/todo')
// Template engine
app.set('view engine', 'ejs');

// use static
app.use(express.static(__dirname + '/public'));


app.use('/',todo);


app.listen(3001,function(err){
    console.log("app running on port 3001")
})