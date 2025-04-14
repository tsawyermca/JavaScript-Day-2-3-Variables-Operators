//Day 2 Problem 1

var age = 32;
let firstName = "Tyler";
const isStudent = true;

console.log(age);
console.log(firstName);
console.log(isStudent);


//Day 2 Problem 2

let temperature = 75;
let greeting = "Greetings";
let isLoggedIn = true;
let emptyValue = null;
let notDefined;
let uniqueID = Symbol("ID");

console.log(typeof temperature);
console.log(typeof greeting);
console.log(typeof isLoggedIn);
console.log(typeof emptyValue);
console.log(typeof notDefined);
console.log(typeof uniqueID);


//Day 2 Problem 3

let localAge = 25;

function displayAge() {
    console.log("Local Age:", localAge);
}

displayAge();
console.log("Global Age:", age);
console.log(localAge);


//Day 3 Problem 1

let num1 = 5;
let num2 = 12;

let sum = num1 + num2;
console.log(sum);
let difference = num1 - num2;
console.log(difference);
let product = num1 * num2;
console.log(product);
let quotient = num1 / num2;
console.log(quotient);
let remainder = num1 % num2;
console.log(remainder);


//Day 3 Problem 2

let score = 50;
console.log(score);
score += 25;
console.log(score);
score *= 2;
console.log(score);
score -= 30;
console.log(score);

//Day 3 Problem 3

let varA = 10;
let varB = "10";
let isEqual = (varA == varB);
console.log(isEqual);
let strictEqual = (varA === varB);
console.log(strictEqual);
let greaterThan = (15 > varA > 5);
console.log(greaterThan);