const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const todo = require('./controllers/todo')
app.use('/',todo);
// Template engine
app.set('view engine', 'ejs');

// use static
app.use(express.static(__dirname + '/public'));


//parse application/json
app.use(bodyParser.json())




app.listen(3001,function(err){
    console.log("app running on port 3001")
})