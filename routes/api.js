var express = require('express');
var router = express.Router();


router.get('/superheros', function(req, res) {
  res.render('api', { title: 'Superhero API'});
});

router.post('/superheros', function(req, res) {
  console.log(req.body.name);
  res.redirect('/api/superheros');
});

module.exports = router;
