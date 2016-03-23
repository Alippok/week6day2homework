var assert = require('chai').assert;
var basket = require('../basket.js');
var itemOne = require('../item.js');
var itemTwo = require('../item_two.js');
var itemThree = require('../item_three.js');


describe("basket", function(){
  it("should be able to take in an item", function(){
    assert.deepEqual([itemOne], basket.addItem(itemOne));
  });

  it("should be able to add another item to its holder", function(){
    assert.deepEqual([itemOne, itemTwo], basket.addItem(itemTwo));
  });

  it("should be able to return a list of the names in its holder", function(){
    assert.deepEqual(["travel mug", "5 person tent"], basket.itemsList());
  });

  it("should be able to list a specific items details", function(){
    assert.deepEqual({name: "travel mug", cost: 5.99}, basket.itemList("travel mug"));
  });
  
  it("should be able to return a total price of all items", function(){
    assert.equal(45.98, basket.totalPrice());
  });

});