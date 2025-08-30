`use strict`;
let productName = "Laptop";
let price = 90;
let inStock = true;
let discount = null;
let orderId = 1234567890123456789n;
let shippingCost;
let totalPrice;
let quantity;
//1
quantity = prompt(
  `Product: ${productName}\nPrice: $${price}\nHow many ${productName}s do you want to buy?`
);
//3
quantity = Number(quantity);
//2
if (inStock === false) {
  console.log(`Product ${productName} is out of stock!`);
}
//4
else if (!quantity) {
  console.log(`Invalid quantity!`);
}
//5
else {
  totalPrice = price * quantity;
  if (discount) {
    totalPrice -= discount;
    console.log(totalPrice);
  }

  //6
  if (totalPrice >= 100) {
    shippingCost = 0;
  } else if (totalPrice >= 50) {
    shippingCost = 5;
  } else {
    shippingCost = 10;
  }
  //7
  let paymentMethod = prompt("Choose payment method: credit, paypal, cash");
  let message;
  switch (paymentMethod) {
    case "credit":
      message = "Paid by credit card";
      break;
    case "paypal":
      message = "Paid via PayPal";
      break;
    case "cash":
      message = "Cash on delivery";
      break;
  }
  //8
  console.log(`Order ID: ${orderId}`);
  console.log(`Product: ${productName}`);
  console.log(`Quantity: ${quantity}`);
  console.log(`Total: $${totalPrice}`);
  console.log(`Shipping: $${shippingCost}`);
  console.log(`Payment: ${message}`);
  console.log(`Status: Order confirmed!`);
}
