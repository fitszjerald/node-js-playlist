const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

let data = [{item:'enjoy'}]

router.get('/todo', function(req, res){
    res.render('todo',{todos : data})
})

router.post('/todo',urlencodedParser, function(req, res){
  const newdata = data.push(req.body)
    res.json(newdata)
})

module.exports = router;