const Product = require('./Product.js');

class MegaCoverage extends Product {
  constructor (name, sellIn, price) {
    super(name, sellIn, price, 0, 0, 80);
  }

  updatePrice(){ /* DO NOT UPDATE PRICE */ }

  maxPrice() {
    return 50;
  }
}

module.exports = MegaCoverage;

