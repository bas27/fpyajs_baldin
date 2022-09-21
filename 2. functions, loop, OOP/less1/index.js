const tshirt = new Product(280, 340, "No name t-shirt", "t-shirt");

const iphone = new Product(281, 60000, "Iphone 11", "mobile");

function Product(id, price, title, category) {
  this.id = id,
  this.price = price,
  this.title = title,
  this.category = category
  };

Product.prototype.getInfo = function() {
    return `${this.category} - ${this.price}`;
}

tshirt.getInfo = function() {
    return `${this.id} - ${this.category} - ${this.price}`;
}

// tshirt.discount = 50

// console.log(tshirt.getInfo())
// console.log(tshirt.getInfo === iphone.getInfo)

// console.log(tshirt instanceof Object)

