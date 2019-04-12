const CarInsurance = require('./CarInsurance.js');

class MegaCoverage extends CarInsurance {
  constructor (name, sellIn, price) {
    super(name, sellIn, price, 0, 0, 80);
  }

  updatePrice(){ /* DO NOT UPDATE PRICE */ }
}

module.exports = MegaCoverage;

