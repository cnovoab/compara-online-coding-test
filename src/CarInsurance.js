const ProductFactory = require('./ProductFactory');

class CarInsurance {
  constructor(products = []) {
    this.products = products.map(function(product) {
      return ProductFactory.create(product.name, product.sellIn, product.price)
    });
  }

  updatePrice() {
    this.products.forEach(function(product) {
      product.updatePrice();
    });

    return this.products;
  }
}

module.exports = CarInsurance
