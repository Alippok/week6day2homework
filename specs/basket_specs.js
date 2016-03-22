var assert = require('chai').assert;
var basket = require('../basket.js');
var item_one = require('../item.js');
var item_two = require('../item_two.js');


describe("basket", function(){
  it("should be able to take in an item", function(){
    assert.deepEqual([item_one], basket.add_items(item_one))
  });

  it
});