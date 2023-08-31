/**
 * Var
 * Var => global varible JS
 * */

var price; // Declare
price = 3000; // Redeclare
console.log("price", price);

var price = 2000; // re-asign
console.log("price", price);

/**
 * Scope
 */
// global var diskon
var diskon = 500; // Declare var diskon
if (true) {
  var diskon = 200; // Re-asign var diskon
}
console.log("diskon", diskon);

// var not changes in function
function localDiskon() {
  // Locale var diskon
  var diskon = 400;
  console.log("diskonFn:", diskon);
}

localDiskon();

console.log("diskon", diskon);
