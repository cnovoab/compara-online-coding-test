const CarInsurance = require('./CarInsurance.js');

class FullCoverage extends CarInsurance {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
    this.step = 1;
  }
}

module.exports = FullCoverage;

