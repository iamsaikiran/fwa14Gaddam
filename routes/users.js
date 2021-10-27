var express = require('express');
var router = express.Router();
var nooftimes = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  nooftimes = nooftimes +1 ;
  res.send(`User accesses are: ${nooftimes}`);
});

module.exports = router;
