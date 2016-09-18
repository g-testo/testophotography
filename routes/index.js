var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.user) {
        return res.render('index');
    }
    var vm = {
        title: 'Home page',
        error: req.flash('error')
    };
  res.render('index', vm);
});

module.exports = router;
