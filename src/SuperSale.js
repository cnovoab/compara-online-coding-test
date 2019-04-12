const Product = require('./Product.js');

class SuperSale extends Product {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }

  step() {
    return -2;
  }
}

module.exports = SuperSale;

