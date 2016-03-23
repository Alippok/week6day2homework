var checkout = {
  customer: [],
  addCustomer: function(customer){
    this.customer = customer;
    return this.customer["name"];
  },
  basketCheck: function(){
    return this.customer.basketItems();
  },
  basketPrice: function(){
    return this.customer.basketTotal();
  },
  discountCheck: function(){
    
    if ( this.basketPrice() > 20){
      var discount = this.basketPrice() / 10;
      var newPrice = this.customer.basketTotal() - discount;
      return newPrice.toFixed(2);
      // return this.basket_price(); Was trying to change the price when I didnt need to 
      //The checkout could then pass the new price back to customer and they then pay that 
      //amount
    } else {
       return this.basketPrice();
    };
  }

};




module.exports = checkout