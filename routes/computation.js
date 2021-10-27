var express = require('express');
var router = express.Router();
var key = 0;
var value = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.query!=={}){
        if(req.query.key){
            key = req.query.key;
        }else{
            key = Math.floor(Math.random()*6);
        }
    }
    value = Math.cos(key);
  res.send(`Math.cos() applied to ${key} is ${value}`);
});

module.exports = router;
