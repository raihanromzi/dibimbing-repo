// Class product

const products = []

module.exports = class Product {
  constructor(title) {
    this.title = title
  }

  static fetchAll() {
    return products
  }

  // Store object
  save() {
    products.push(this)
  }
}