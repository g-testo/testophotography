var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.user) {
        return res.render('layout');
    }
    var vm = {
        title: 'Home page',
        error: req.flash('error')
    };
  res.render('layout', vm);
});

module.exports = router;
