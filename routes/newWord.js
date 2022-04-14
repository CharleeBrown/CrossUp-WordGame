var express = require('express');
const { json } = require('express/lib/response');
var router = express.Router();
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post('/',urlencodedParser, function(req, res, next) {
	var word = req.body.inputWord;
  var clue = req.body.inputClue;
  console.log(word);
  res.redirect('/admin');
});

module.exports = router;
