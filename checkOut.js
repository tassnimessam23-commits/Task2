let price = +prompt(`Enter item price:`);
let quantity = +prompt(`Enter quantity:`);
let coupon = +prompt(`Enter coupon discount percentage (0 if none):`);

let subtotal = price * quantity;
let shipping = 0;

if (subtotal >= 1000) {
    shipping = 0;
} else {
    shipping = 60;
}

let discount = subtotal * (coupon / 100);
let total = subtotal - discount + shipping;

total = total + ((total * 14)/100);

console.log(`Subtotal: ${subtotal.toFixed(2)} EGP`);
console.log(`Shipping: ${shipping.toFixed(2)} EGP`);
console.log(`Discount: ${discount.toFixed(2)} EGP`);
console.log(`Final total: ${total.toFixed(2)} EGP`);