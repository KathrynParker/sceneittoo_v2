var express = require('express');
var router = express.Router();

const dotenv = require('dotenv');

dotenv.load();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    isLoggedIn: req.isAuthenticated(),
  });
});

module.exports = router;