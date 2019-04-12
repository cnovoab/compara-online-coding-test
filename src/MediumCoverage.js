const CarInsurance = require('./CarInsurance.js');

class MediumCoverage extends CarInsurance {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }
}

module.exports = MediumCoverage;

