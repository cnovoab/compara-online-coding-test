class Product {

  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  step() {
    return -1;
  }

  minPrice() {
    return 0;
  }

  maxPrice() {
    return 50;
  }

  factor() {
    return this.sellIn > 0 ? 1 : 2;
  }

  updatePrice() {
    let new_price = this.price + this.step() * this.factor();
    if (new_price <= this.minPrice()) {
      new_price = this.minPrice();
    }
    else if (new_price >= this.maxPrice()) {
      new_price = this.maxPrice();
    }

    this.price = new_price
    this.sellIn--
  }
}

module.exports = Product;
