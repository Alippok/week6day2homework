var customer = {
  name: "Joe Bloggs",
  basket: [],
  addBasket: function(basket){
    this.basket = basket;
    return this.basket.holder;
  },
  addItem: function(item){
    this.basket.addItem(item);
    return this.basket.holder
  },
  basketItems: function(){
    return this.basket.itemsList();
  },
  basketTotal: function(){
    return this.basket.totalPrice();
  }

};




module.exports = customer