const Product = require('./Product.js');

class MediumCoverage extends Product {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }
}

module.exports = MediumCoverage;

