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


});