const Product = require('./Product.js');

class FullCoverage extends Product {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }

  step() {
    return 1;
  }
}

module.exports = FullCoverage;

