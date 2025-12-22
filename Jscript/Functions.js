function sayHello(name) {
   console.log("Hello, " + name + "!");
}

// Вызов функции
sayHello("World"); 


function sayHello(params) {
    console.log("Привет, " + params + "!");        
}
sayHello("Дмитрий");
sayHello("Алексей");
sayHello("Мария");


function sum(a, b) {
    return a + b;
}
let result = sum(5, 10);
console.log(result); 


function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 
console.log(isEven(0)); 
console.log(isEven(-2)); 
console.log(isEven(-3));


function max(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return "Числа равны";
    }   
}

console.log(max(10, 5)); 
console.log(max(3, 8));  
console.log(max(7, 7));


function getInitials(firstName, lastName) {
    let initials = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase() + ".";
    return initials;
}
console.log(getInitials("Алиса", "Боброва"));
console.log(getInitials("Дмитрий", "Иванов"));
console.log(getInitials("мария", "петрова"));


function square(num) {
    return num * num;
}
function cube(num) {
    return square(num) * num;
}
console.log(square(3)); 
console.log(cube(3));


const sumTwo = (a, b) => a + b;
console.log(sumTwo(7, 12));


function getFactorial(n) {
    if (n < 0) {
        return "Факториал не определен для отрицательных чисел";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(getFactorial(5)); 
console.log(getFactorial(0)); 
console.log(getFactorial(-3));
