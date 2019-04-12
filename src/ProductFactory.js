const LowCoverage = require('./LowCoverage');
const MediumCoverage = require('./MediumCoverage');
const FullCoverage = require('./FullCoverage');
const MegaCoverage = require('./MegaCoverage');
const SpecialFullCoverage = require('./SpecialFullCoverage');
const SuperSale = require('./SuperSale');

class ProductFactory {
  static create(name, sellIn, price) {
    switch(name) {
      case 'Low Coverage': return new LowCoverage(name, sellIn, price);
        break;
      case 'Medium Coverage': return new MediumCoverage(name, sellIn, price);
        break;
      case 'Full Coverage': return new FullCoverage(name, sellIn, price);
        break;
      case 'Mega Coverage': return new MegaCoverage(name, sellIn, price);
        break;
      case 'Special Full Coverage': return new SpecialFullCoverage(name, sellIn, price);
        break;
      case 'Super Sale': return new SuperSale(name, sellIn, price);
        break;
    }
  }
}

module.exports = ProductFactory;
