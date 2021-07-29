var express = require('express');
var router = express.Router();

/* GET home page. */



router.get('/homepage', function(req, res, next) {
  const p1 = 'This server uses a <a href="https://pugjs.org/api/getting-started.html" target="_blank">pug template</a> for the html output'
  res.render('layout', { title: 'Hello World', p1 });
});

router.get('/abi', function(req, res, next) {
  res.render('layout2');
});

module.exports = router;
