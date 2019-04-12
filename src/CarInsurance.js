class CarInsurance {
  constructor(name, sellIn, price, step = -1, min_price = 0, max_price = 50) {
    this.name = name;
    this.sellIn = sellIn;
    this.step = step;

    if (price >= min_price && price <= max_price) {
      this.price = price;
      this.min_price = min_price;
      this.max_price = max_price;
    } else {
      throw new Error('Error: price is out of bounds');
    }
  }

  factor() {
    return this.sellIn > 0 ? 1 : 2;
  }

  updatePrice() {
    let new_price = this.price + this.step * this.factor();

    if (new_price <= this.min_price) {
      new_price = this.min_price;
    }
    else if (new_price >= this.max_price) {
      new_price = this.max_price;
    }

    this.price = new_price
    this.sellIn--
  }

}

module.exports = CarInsurance;
