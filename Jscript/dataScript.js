let age = 30;
console.log(age); // Вывод: 30

age = 31; // Изменение значения допустимо
console.log(age); // Вывод: 31

const birthYear = 1993;
console.log(birthYear); // Вывод: 1993
// birthYear = 1994; // Ошибка: нельзя изменить значение константы

// var is function-scoped and can be redeclared. But it's generally better to use let and const as there may be mistakes using it.

let integer = 42;          // Целое число
let float = 3.14;          // Число с плавающей запятой
let negative = -7;       // Отрицательное число
let notANumber = NaN;  // Специальное значение "Не число"
let user = null;        // Специальное значение "Нет значения"
let undefinedValue; // Значение не определено

console.log(integer, float, negative, notANumber, user, undefinedValue);
console.log(typeof 42)         // "number"
console.log(typeof 3.14)       // "number"
console.log(typeof -7)        // "number"
console.log(typeof NaN)     // "number"
console.log(typeof null)      // "object"
console.log(typeof undefined) // "undefined"


let strInteger = String(integer);         // Строка, представляющая целое число
console.log(strInteger);               // Вывод: "42"
let numInteger = Number(strInteger);      // Число, преобразованное из строки
console.log(numInteger);               // Вывод: 42

let strUndefined = String(undefinedValue); // Строка "undefined" OK
console.log(strUndefined);
let numUndefined = Number(undefinedValue);  // Число NaN as there is number representation
console.log(numUndefined);              // Вывод: NaN

let strNull = String(user);            // Строка "null" OK
console.log(strNull);
let numNull = Number(user);             // Число 0 as null is 0 in number representation
console.log(numNull);                 // Вывод: 0

let numberValue = 123;
numberValue = "456"; // Допустимо, так как JavaScript динамически типизирован
console.log(numberValue); // Вывод: "456"

constName = prompt("Enter your name:");
constAge = prompt("Enter your age:");
console.log("Your name is " + constName + " and you are " + constAge + " years old.");
alert("Welcome, " + constName + "!");



