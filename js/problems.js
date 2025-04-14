//Day 2 Problem 1

var age = 32;
var firstName = "Tyler";
const isStudent = true;

console.log(age);
console.log(firstName);
console.log(isStudent);


//Day 2 Problem 2

let temperature = 75;
var greeting = "Greetings";
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

function displayAge() {
    let localAge = 25;
    console.log("Local Age:", localAge);
}

displayAge();
console.log("Global Age:", age);


//Day 2 Advanced Problem 1

let fName = "Tyler";
let Tage = 32;
let student = true;
let greetingA = ("Hello, my name is " + fName + ", I am " + Tage + " years old, and it is " + student + " that I am a student");
console.log(greetingA);
console.log(typeof fName);
console.log(typeof Tage);
console.log(typeof student);


//Day 2 Advanced Problem 2

function convertToF (celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit
}
console.log(convertToF(0));
console.log(convertToF(25));
console.log(convertToF(50));


//Day 2 Advanced Problem 3

let price1 = 5;
let price2 = 10;
let price3 = 15;
let dcthresh = 25;
let discount = 5;
let total = (price1 + price2 + price3);
if(total >= dcthresh){
    let finalprice = "Final Price: " + (total - discount);
    console.log(finalprice);
    console.log(typeof finalprice);
}


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


//Day 3 Advanced Problem 1

let baseSalary = 5000;
let bonusPer = 0.15;
let deduction = 200;
let bonus = (baseSalary * bonusPer);
bonus -= deduction;
let bonustotal = baseSalary + bonus;

console.log("Salary: ", baseSalary);
console.log("Bonus %: ", bonusPer);
console.log("Deduction: ", deduction);
console.log("Bonus: ", bonus);
console.log("Total: ", bonustotal);


//Day 3 Advanced Problem 2

let item1 = 5;
let item2 = 8;
let item3 = 10;
let itemTotal = 0;
let dcT = 20;
let dcA = 5;
itemTotal += item1;
itemTotal += item2;
itemTotal += item3;
console.log("Subtotal: ",itemTotal);
if(itemTotal >= dcT){
    itemTotal -= dcA;
}
console.log("Discount: ", dcA);
console.log("Total: ",itemTotal);


//Day 3 Advanced Problem 3

let correctAnswers = 0
let userAnswers = ["A", "B", "C", "D"];
let expectedAnswers = ["A", "C", "C", "D"];

if(userAnswers === expectedAnswers){
    correctAnswers++;
}

let testscore = correctAnswers / 100;

if(score >= 70){
    console.log("Passed")
} else {
    console.log("Failed")
}