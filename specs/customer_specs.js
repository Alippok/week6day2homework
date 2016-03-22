var assert = require('chai').assert;
var customer = require('../customer.js')
var basket = require('../basket.js');
var item_one = require('../item.js');
var item_two = require('../item_two.js');
var item_three = require('../item_three.js');


describe("customer", function(){
  it("should be able to return its name ", function(){
    assert.equal("Joe Bloggs", customer.name);
  });




});