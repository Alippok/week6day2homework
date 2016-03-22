

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
  }
};





module.exports = basket;