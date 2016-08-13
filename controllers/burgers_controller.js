var express = require ('express');
var burger = require ('../models/burgers.js');
var bodyParser = require('body-parser');
var router = express.Router();




router.get('/', function(req, res){
  burger.findAll(function(data){
    res.render('index', {data : data})
  });
});

router.post('/devour/:burgerName', function(req,res){
  burger.devourBurger(req.body.id, function(result){
  res.redirect('/');
  });
});

router.post('/make', function(req, res){
  burger.addBurger(req.body.burger_name, function(result){
  res.redirect('/');
  });
});

module.exports = router;