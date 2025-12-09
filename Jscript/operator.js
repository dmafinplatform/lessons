let a = 10;
let b = 5;
let c = 2;

let sum1 = a + b + c;
let sum2 = (a + c) - b;
let sum3 = (a * b) / c;
let sum4 = a % b;
console.log(sum1, sum2, sum3, sum4);

let x = 7;
console.log(x++ + ++x);
console.log(x-- - --x);

let result = "The result is: " + (4 + 5);
console.log(result); // Вывод: "The result is: 9"

if (a > b && a > 0 && b > 0) {
    console.log("Condition 1 is true");
}   else {
    console.log("Condition 1 is false");
}       
if (c < 10 || c === 2) {
    console.log("Condition 2 is true");
}   else {
    console.log("Condition 2 is false");
}
if ((a / c) !== 5) {
    console.log("Condition 3 is true");
}   else {
    console.log("Condition 3 is false");
}

console.log(10 == "10");  // true, because == performs type coercion
console.log(10 === "10"); // false, because === checks for both value and type equality 

let x1 = 9; // Example value for x
let condition1 = ((x1 % 2 === 0 || x1 % 3 === 0) && (x1 % 6 !== 0));
console.log(condition1); // Output the result of condition 1
let y1 = 7; // Example value for y
let condition2 = !(y1 > 10 || y1 < 5);
console.log(condition2); // Output the result of condition 2

