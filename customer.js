var customer = {
  name: "Joe Bloggs",
  basket: [],
  add_basket: function(basket){
    this.basket = basket;
    return this.basket.holder;
  }

};




module.exports = customer