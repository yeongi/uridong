var express = require('express');
var router = express.Router();
const pool = require("../config/dbConfig");


/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: '12312' });
});

module.exports = router;
