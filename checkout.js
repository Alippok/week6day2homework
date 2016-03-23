var checkout = {
  customer: [],
  add_customer: function(customer){
    this.customer = customer;
    return this.customer["name"];
  }



};




module.exports = checkout