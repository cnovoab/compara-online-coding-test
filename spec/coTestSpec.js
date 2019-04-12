const expect = require('chai').expect;
const ProductFactory = require('../src/ProductFactory');
const Product = require('../src/Product');
const CarInsurance = require('../src/CarInsurance');

describe("Compara Online Test", function() {

  it("should return 50 for maximum price", function() {
    const insurance = new CarInsurance([ new Product("Low Coverage", 0, 0) ]);
    expect(insurance.products[0].maxPrice()).equal(50);
  });

  describe("CarInsurance", function() {
    it("should create the corresponding product classes", function() {
      const insurance = new CarInsurance([
        new Product("Low Coverage", 0, 0),
        new Product("Medium Coverage", 10, 5),
        new Product("Mega Coverage", 10, 80)
      ]);
      insurance.updatePrice();
      expect(insurance.products[0].constructor.name).equal('LowCoverage');
      expect(insurance.products[1].constructor.name).equal('MediumCoverage');
      expect(insurance.products[2].constructor.name).equal('MegaCoverage');
    });

    it("should update the prices for each of its products, except Mega", function() {
      const insurance = new CarInsurance([
        new Product("Low Coverage", 0, 0),
        new Product("Medium Coverage", 10, 5),
        new Product("Mega Coverage", 10, 80)
      ]);
      insurance.updatePrice();
      expect(insurance.products[0].price).equal(0);
      expect(insurance.products[1].price).equal(4);
      expect(insurance.products[2].price).equal(80);
    });
  });

  describe("Product Factory", function() {
    it("should create the corresponding product class", function() {
      const products = [
        ProductFactory.create("Low Coverage", 0, 4),
        ProductFactory.create("Medium Coverage", 0, 4),
        ProductFactory.create("Mega Coverage", 0, 4),
        ProductFactory.create("Full Coverage", 0, 4),
        ProductFactory.create("Special Full Coverage", 0, 4),
        ProductFactory.create("Super Sale", 0, 4),
      ]
      expect(products[0].constructor.name).equal('LowCoverage');
      expect(products[1].constructor.name).equal('MediumCoverage');
      expect(products[2].constructor.name).equal('MegaCoverage');
      expect(products[3].constructor.name).equal('FullCoverage');
      expect(products[4].constructor.name).equal('SpecialFullCoverage');
      expect(products[5].constructor.name).equal('SuperSale');
    });

    it("should update the prices for each of its products, except Mega", function() {
      const insurance = new CarInsurance([
        new Product("Low Coverage", 0, 0),
        new Product("Medium Coverage", 10, 5),
        new Product("Mega Coverage", 10, 80)
      ]);
      insurance.updatePrice();
      expect(insurance.products[0].price).equal(0);
      expect(insurance.products[1].price).equal(4);
      expect(insurance.products[2].price).equal(80);
    });
  });

  describe("Product", function() {
    it("step should be -1", function() {
      const product = new Product("Product", 0, 10);
      expect(product.step()).equal(-1);
    });

    it("factor should be 1 while sellIn is positive", function() {
      const product = new Product("Product", 1, 10);
      expect(product.factor()).equal(1);
    });

    it("factor should be 2 while sellIn is equals or less than zero", function() {
      const product = new Product("Product", -1, 10);
      expect(product.factor()).equal(2);
    });

    it("price should be set to min value allowed if less than min is tried to be set", function() {
      const product = new Product("Product", 10, 0);
      product.updatePrice();
      expect(product.price).equal(product.minPrice());
    });

    it("price should be set to max value allowed if greater than max is tried to be set", function() {
      const product = new Product("Product", 10, 60);
      product.updatePrice();
      expect(product.price).equal(product.maxPrice());
    });
  });

  describe("Medium Coverage", function() {
    it("should price decrease by 2 when no sellIn days left", function() {
      const product = ProductFactory.create("Medium Coverage", 0, 4);
      product.updatePrice();
      expect(product.price).equal(2);
    });
  });

  describe("Mega Coverage", function() {
    it("should never change price", function() {
      const product = ProductFactory.create("Mega Coverage", 0, 80);
      product.updatePrice();
      expect(product.price).equal(80);
    });

    it("should never change sellIn", function() {
      const product = ProductFactory.create("Mega Coverage", 15, 80);
      product.updatePrice();
      expect(product.sellIn).equal(15);
    });

    it("max price should be 80", function() {
      const product = ProductFactory.create("Mega Coverage", 15, 80);
      product.updatePrice();
      expect(product.maxPrice()).equal(80);
    });
  });

  describe("Special Full Coverage", function() {
    it("should set price to 0 when no sellIn days left", function() {
      const product = ProductFactory.create("Special Full Coverage", 0, 10);
      product.updatePrice();
      expect(product.price).equal(0);
    });

    it("should return 2 for factor when sellIn is greater than 5 and less or equal than 10", function() {
      const product = ProductFactory.create("Special Full Coverage", 6, 10);
      expect(product.factor()).equal(2);
    });

    it("should return 3 for factor when sellIn is greater than 0 and less or equal than 5", function() {
      const product = ProductFactory.create("Special Full Coverage", 3, 10);
      expect(product.factor()).equal(3);
    });
  });

  describe("Super Sale", function() {
    it("step should be -2", function() {
      const product = ProductFactory.create("Super Sale", 0, 10);
      expect(product.step()).equal(-2);
    });
  });
});
