//Task 1: function declaration. Customer invoice calculation scenario.
function calculateInvoice(subtotal, taxRate, discount) { //declare function
    total = (subtotal + (subtotal * taxRate)) - discount; //use formula to calculate the total as a variable
    return `Total Invoice $${total.toFixed(2)}`; //return the calculated variable
}

console.log(calculateInvoice(100, 0.08, 5)); //test data
console.log(calculateInvoice(500, 0.1, 20));

//Task 2: function expression. Employee hourly wage calculation scenario.
const calculateHourlyWage = function(salary, hoursPerWeek) { //function expression
    wage = salary / (hoursPerWeek * 52); //use formula to calculate hourly wage based on hours worked and yearly wage
    return `Hourly Wage: $${wage.toFixed(2)}`; //return a string that uses template literals to insert the calculated wage
}

console.log(calculateHourlyWage(52000, 40)); //test data
console.log(calculateHourlyWage(75000, 35));

//Task 3: arrow function. Customer loyalty discount scenario.
const calculateLoyaltyDiscount = (amount, years) => { //use arrow to create function
    if (years >= 5) { //create first if statement
        discountedAmount = amount * 0.85; //use formula to return 85% of the initial amount (15% discount)
    }
    else if (years >= 3) { //if the first condition is not true, it checks to see if this one is, giving a 10 percent discount if true
        discountedAmount = amount * 0.9;
    }
    else { //if neither of the first two conditions are true, it will give a 5 percent discount
        discountedAmount = amount * 0.95;
    }
    return `Discounted Price: $${discountedAmount.toFixed(2)}`; //return a string that uses template literals to insert the discounted amount, the amount is set to go to 2 decimal places
}

console.log(calculateLoyaltyDiscount(100, 6)); //test data
console.log(calculateLoyaltyDiscount(200, 2));