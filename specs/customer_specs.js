var assert = require('chai').assert;
var customer = require('../customer.js')
var basket = require('../basket.js');
var itemOne = require('../item.js');
var itemTwo = require('../item_two.js');
var itemThree = require('../item_three.js');


describe("customer", function(){
  it("should be able to return its name ", function(){
    assert.equal("Joe Bloggs", customer.name);
  });

  it("should be able to take in a basket", function(){
    assert.deepEqual(basket.holder, customer.addBasket(basket));
  });

  it("should be able to check what items are in its basket", function(){
    assert.deepEqual(["travel mug", "5 person tent"], customer.basketItems());
  });

  it("should be able to add an item to its basket", function(){
    assert.deepEqual([itemOne, itemTwo, itemThree], customer.addItem(itemThree));
  });

  it("should be able to seee total price of basket", function(){
    assert.equal(48.48, customer.basketTotal());
  });


});