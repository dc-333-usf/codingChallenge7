//Task 1: function declaration. Customer invoice calculation scenario.
function calculateInvoice(subtotal, taxRate, discount) { //declare function
    total = (subtotal + (subtotal * taxRate)) - discount; //use formula to calculate the total as a variable
    return `Total Invoice ${total}`; //return the calculated variable
}

console.log(calculateInvoice(100, 0.08, 5)); //test data
console.log(calculateInvoice(500, 0.1, 20));

//Task 2: function expression. Employee hourly wage calculation scenario.
const calculateHourlyWage = function(salary, hoursPerWeek) { //function expression
    wage = salary / (hoursPerWeek * 52); //use formula to calculate hourly wage based on hours worked and yearly wage
    return `Hourly Wage: ${wage}`; //return a string that uses template literals to insert the calculated wage
}

console.log(calculateHourlyWage(52000, 40)); //test data
console.log(calculateHourlyWage(52000, 40));