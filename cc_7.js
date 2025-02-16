//Task 1: function declaration. Customer invoice calculation scenario.
function calculateInvoice(subtotal, taxRate, discount) { //declare function
    total = (subtotal + (subtotal * taxRate)) - discount; //use formula to calculate the total as a variable
    return `Total Invoice ${total}`; //return the calculated variable
}

console.log(calculateInvoice(100, 0.08, 5)); //test data
console.log(calculateInvoice(500, 0.1, 20));