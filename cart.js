///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
  let taxAmount = cartTotal * tax;
  console.log(taxAmount);
  return cartTotal + taxAmount - couponValue;
};
console.log(calcFinalPrice(summedPrice, 2, 0.1));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
We need following properties:
[name : string]  to get the order and record who placed the order,
[phone : number]  to contact the customer incase of issue with order,
[address : string]  to check if we deliver the order to them,
[age : number]  for the restaurant owners to analyze the demand and maybe modify the menu accordingly,
[sendNewsLetter : boolean]  check if the customer wants to get rewards, hear about upcoming deals,
[email : string] for marketing purposes and remind the customer about promo actions
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = {
  name: "Aaron Smith",
  phone: 3031245876,
  address: "213 Camden str, Detroit, MI 48213",
  age: 37,
  sendNewsLetter: true,
  email: "a.smith@gmail.com",
};
