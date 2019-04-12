// const CarInsurance = require('./CarInsurance.js');
const FullCoverage = require('./FullCoverage.js');

class SpecialFullCoverage extends FullCoverage {
  constructor (name, sellIn, price) {
    super(name, sellIn, price);
  }

  factor() {
    if (this.sellIn > 5 && this.sellIn <= 10) {
      return 2;
    }
    else if (this.sellIn > 0 && this.sellIn <= 5) {
      return 3;
    }

    return 1;
  }

  updatePrice(){
    let zero = this.sellIn <= 0;
    super.updatePrice();

    if (zero) {
      this.price = 0
    }
  }
}

module.exports = SpecialFullCoverage;

