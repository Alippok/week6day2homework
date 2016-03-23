var assert = require('chai').assert;
var checkout = require('../checkout.js');
var customer = require('../customer.js')
var basket = require('../basket.js');
var item_one = require('../item.js');
var item_two = require('../item_two.js');
var item_three = require('../item_three.js');

describe("Checkout", function(){
  it("should take in a customer with basket", function(){
    customer.add_basket(basket);
    assert.equal("Joe Bloggs", checkout.add_customer(customer))
  });

  it("should be able to check items in customers basket", function(){
    assert.deepEqual(["travel mug", "5 person tent"], checkout.basket_check())
  });

  it("should be able to see total price of the customers basket", function(){
    assert.equal(45.98, checkout.basket_price())
  });

});