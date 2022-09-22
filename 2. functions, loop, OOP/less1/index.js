function Product(id, price, title, category) {
  this.id = id,
  this.price = price,
  this.title = title,
  this.category = category
  };

Product.prototype.getInfo = function(additional) {
    return `${this.category} - ${this.price} - ${additional}`;
}
const tshirt = new Product(280, 340, "No name t-shirt", "t-shirt");
const iphone = new Product(281, 60000, "Iphone 11", "mobile");
// tshirt.getInfo = function() {
//     return `${this.id} - ${this.category} - ${this.price}`;
// }




// tshirt.discount = 50

// console.log(tshirt.getInfo())
// console.log(tshirt.getInfo === iphone.getInfo)

// console.log(tshirt instanceof Object)

const getInfo = tshirt.getInfo;

const ctx = {
    category: 'Toys',
    price: 4000
};
// console.log(getInfo.call(ctx, 'text'))
// console.log(getInfo.apply(ctx, ['text']))


const arr = [15, 123, 45, 1235, 5, 45, 15, 62, 74]

// console.log(Math.max(...arr))
// console.log(Math.max.apply(null, arr))
// console.log(Math.max(15, 123, 45, 1235, 5, 45, 15, 62, 74))

function add(a, b) {
    return a + b
}

const add10 = add.bind(null, 10);

console.log(add10(8))