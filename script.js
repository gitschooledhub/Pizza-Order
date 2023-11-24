// Pizza Order by Moire

// Add an Event Listener to the button to run the placeOrder function
document.getElementById("orderbtn").addEventListener("click", placeOrder);


// FUNCTION
  // Store order code in a function
function placeOrder() {
    
// INPUT
let size = prompt("What size of pizza would you like? (small, medium, large):");
let topping1 = prompt("What topping would you like? (First)");
let topping2 = prompt("What topping would you like? (Second)");

// PROCESS
let order = `Your ${size} ${topping1} and ${topping2} pizza will be ready soon!`;

// OUTPUT
alert(order);
}
