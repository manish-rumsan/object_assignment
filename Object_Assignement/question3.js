/*
Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and 
add the value (how much was the discount). 

In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) 
add discount (10% or 7%) and add the property “discount” to the object.
*/
let prodprice = {
  name: "headphones",
  price: 150,
  // discount: "7%"
};
const checkdiscount = (product) => {
  if (product.hasOwnProperty("discount")) {
    console.log(`Already discounted by ${prod.discount}`);
  } else {
    let priceafterdeduction = product.price > 100 ? 10 : 7; //determine the discount percent

    let newprice = (priceafterdeduction / 100) * product.price; //deterime the new price
    product.price = (product.price - newprice).toFixed(2);

    product.discount = `${priceafterdeduction}%`;

    console.log("Updated Product:", product);
  }
};

//function calling
checkdiscount(prodprice);
