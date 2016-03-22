var basket = {
  holder: [],
  add_items: function(item){
    this.holder.push(item);
    return this.holder
  }
};





module.exports = basket;