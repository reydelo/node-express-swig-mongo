var express = require('express');
var router = express.Router();


router.get('/superheros', function(req, res) {
  res.send('Just a test');
});

module.exports = router;
