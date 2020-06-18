var express = require('express');
var router = express.Router();
var bidList = require('../dummy/bids')
var sort = require('../helpers/sort')

/* GET users listing. */
router.get('/', function(req, res, next) {
    let sortBy = req.query.sortBy
    let ascending = req.query.ascending === 'true'
    let sortedBid = sort(bidList, ascending, sortBy)
    res.send({status: "OK", data: sortedBid})
});

module.exports = router;
