var express = require('express');
var router = express.Router();

var _title = 'Graphic Integrity LLC';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: _title });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: _title });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: _title });
})

module.exports = router;
