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

  it("should be able to take in a basket", function(){
    assert.deepEqual(basket.holder, customer.add_basket(basket));
  });

  it("should be able to check what items are in its basket", function(){
    assert.deepEqual(["travel mug", "5 person tent"], customer.basket_items());
  });

  it("should be able to add an item to its basket", function(){
    assert.deepEqual([item_one, item_two, item_three], customer.add_item(item_three));
  });

  it("should be able to seee total price of basket", function(){
    assert.equal(48.48, customer.basket_total());
  });


});