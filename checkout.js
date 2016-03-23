var checkout = {
  customer: [],
  add_customer: function(customer){
    this.customer = customer;
    return this.customer["name"];
  },
  basket_check: function(){
    return this.customer.basket_items();
  }



};




module.exports = checkout