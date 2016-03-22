var assert = require('chai').assert;
var item = require('../item.js');


describe("item", function(){
  it("should have a description", function(){
    assert.equal("travel mug", item.name)
  });

});