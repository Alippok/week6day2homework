var assert = require('chai').assert;
var basket = require('../basket.js');
var item_one = require('../item.js');
var item_two = require('../item_two.js');
var item_three = require('../item_three.js');


describe("basket", function(){
  it("should be able to take in an item", function(){
    assert.deepEqual([item_one], basket.add_item(item_one))
  });

  it("should be able to add another item to its holder", function(){
    assert.deepEqual([item_one, item_two], basket.add_item(item_two))
  });

  it("should be able to return a list of the names in its holder", function(){
    assert.deepEqual(["travel mug", "5 person tent"], basket.items_list())
  });

  it("should be able to list a specific items details", function(){
    assert.deepEqual({name: "travel mug", cost: 5.99}, basket.item_list("travel mug"))
  })


});