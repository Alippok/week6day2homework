var customer = {
  name: "Joe Bloggs",
  basket: [],
  add_basket: function(basket){
    this.basket = basket;
    return this.basket.holder;
  },
  add_item: function(item){
    this.basket.add_item(item);
    return this.basket.holder
  },
  basket_items: function(){
    return this.basket.items_list();
  }

};




module.exports = customer