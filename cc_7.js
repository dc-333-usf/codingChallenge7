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

//Task 4: parameters and arguments. Product shipping cost calculation scenario.
function calculateShippingCost(weight, location, expedited = false) { //declaare function with parameters
    let cost = 0; //initialize the cost variable
    if (location === "USA") { //check if location is "USA"
        cost += 5 + (0.5 * weight); //5 dollars plus 50 cents for each pound is the shipping rate for USA
    } else if (location === "Canada") { //check if location is "Canada"
        cost += 10 + (0.7 * weight); //10 dollars plus 70 cents per pound is the Canada shipping rate
    } else { //if location doesn't equal either of these
        return `Please enter a valid location.`; //ask user to use a valid location
    }

    if (expedited === true) { //another if condition checking if the order is expedited
        cost += 10 //if it is, add 10 dollars to the shipping cost
    }

    return `Shipping Cost: $${cost.toFixed(2)}` //return the shipping cost to two decimal places, inserting the variable using template literals
}

console.log(calculateShippingCost(10, "USA", true)); //test data
console.log(calculateShippingCost(5, "Canada", false));

//Task 5: returning values. Business loan interest calculation scenario.
const calculateLoanInterest = (principal, rate, years) => {
    interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

console.log(calculateLoanInterest(1000, 0.05, 3));
console.log(calculateLoanInterest(5000, 0.07, 5));

//Task 6: higher-order functions. Filtering high-value transactions scenario.
const transactions = [200, 850, 600, 150, 1000, 2000, 6500]; //decalre array of transactions
const over1000 = transactions.filter(prc => prc >= 1000); //create a filtered array of only transactions over 1000

console.log(over1000); //log the filtered array

//Task 7: closures. Budget tracker scenario.
function createBudgetTracker() { //create the function
    let total = 0; //let the total begin at 0
    return function(balance) { //the inital function will return a new function that takes the parameter "balance"
        return total += balance; //then, the function that was created will return the total plus the balance that is added through the function
    };
}

let budget = createBudgetTracker(); //create a variable, budget, that uses the closure to create the tracking function
console.log(budget(300)); //test data
console.log(budget(200));

//Task 8: recursion in JavaScript. Business growth projection scenario.
function calculateGrowth(years, revenue) { //create the function
    if (years >= 10) { //if statement to check if years are greater than or equal to 10
        return `Projected Revenue: $${revenue.toFixed(2)}`; //once this condition is fulfilled, return the revenue to 2 decimal places
    } else { //if years is not at least ten
        return calculateGrowth((years + 1), (revenue * 1.05)); //then call the original function, adding one to the years and 5 percent to revenue, this will keep happening until years equals 10
    };
}

console.log(calculateGrowth(8, 1000)); //test data
console.log(calculateGrowth(5, 5000));