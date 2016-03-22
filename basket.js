

var basket = {
  holder: [],
  add_item: function(item){
    this.holder.push(item);
    return this.holder;
  },
  items_list: function(){
    var list = []
    for (item of this.holder){
      list.push(item.name)
    };
    return list
  },
  item_list: function(item_name){
    for (item of this.holder){
      if (item.name === item_name);
        return item;
    }
  }
};





module.exports = basket;