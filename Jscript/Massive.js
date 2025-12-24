
let fruits = ["Яблоко", "Банан", "Апельсин"];
console.log(fruits);


fruits.push("Груша");
console.log(fruits);


fruits.pop();
fruits.shift();
console.log(fruits);


fruits.forEach(function(fruit) {
    console.log(fruit);
});


let lengths = fruits.map(function(fruit) {
    return fruit.length;
});
console.log(lengths);


let numbers = [1,2,3,4,5,6,7,8,9,10];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);


let sum = numbers.reduce(function(accumulator, current) {
    return accumulator + current;
}, 0);
console.log(sum);


let firstGreaterThanFive = numbers.find(function(num) {
    return num > 5;
});
console.log(firstGreaterThanFive);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArray = arr1.concat(arr2);
console.log(combinedArray);


let hasBanana = fruits.includes("Банан");
console.log(hasBanana);


fruits.reverse();
console.log(fruits);