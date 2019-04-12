const CarInsurance = require('./CarInsurance.js');

class LowCoverage extends CarInsurance {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }
}

module.exports = LowCoverage;

