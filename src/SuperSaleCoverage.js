const CarInsurance = require('./CarInsurance.js');

class SuperSaleCoverage extends CarInsurance {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
    this.step = -2;
  }
}

module.exports = SuperSaleCoverage;

