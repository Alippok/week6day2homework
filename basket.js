

var basket = {
  holder: [],
  addItem: function(item){
    this.holder.push(item);
    return this.holder;
  },
  itemsList: function(){
    var list = [];
    for (item of this.holder){
      list.push(item.name);
    };
    return list
  },
  itemList: function(itemName){
    for (item of this.holder){
      if (item.name === itemName);
        return item;
    }
  },
  totalPrice: function(){
    var total = 0
    for (item of this.holder){
      total += item.cost
    }
    return total.toFixed(2)
  }
};





module.exports = basket;