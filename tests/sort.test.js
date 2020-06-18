const chai = require('chai')
const should = chai.should()
const sort = require('../helpers/sort')
const bidList = require('../dummy/bids')
const sortedBidListByTruck = require('./sortedBidListByTruck')
const sortedBidListByTruckDescending = require('./sortedBidListByTruckDescending')

const app = require('../app')

describe("Test Sorting", function() {
    it('Should return sorted list in ascending by truck', function () {
        let unsorted = [...bidList]
        let sorted = sort(bidList, true, "truck")

        for (let i = 0;i<sorted.length;i++) {
            sorted[i].id.should.equal(sortedBidListByTruck[i].id)
            sorted[i].truck.should.equal(sortedBidListByTruck[i].truck)
        }
    })
    it('Should return sorted list in descending by truck', function () {
        let unsorted = [...bidList]
        let sorted = sort(bidList, false, "truck")

        for (let i = 0;i<sorted.length;i++) {
            sorted[i].id.should.equal(sortedBidListByTruckDescending[i].id)
            sorted[i].truck.should.equal(sortedBidListByTruckDescending[i].truck)
        }
    })
}) 