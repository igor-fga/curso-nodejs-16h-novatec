module.exports = function(app) {
  var express = require('express'),
      router  = express.Router();

  router.get('/', function (req, res) {
    res.render('index', { text: 'Lorem ipsum dolor sit amet.' });
  });

  return router;
};
