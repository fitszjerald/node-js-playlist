const express = require('express');
const app = express();
// Template engine
app.set('view engine', 'ejs');

// use static
app.use(express.static(__dirname + '/public'));


app.listen(3000,function(err){
    console.log("app running on port 3000")
})