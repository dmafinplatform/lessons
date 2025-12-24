let userInput = prompt("Введите число:");
let number = Number(userInput); 
if (number > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}

let deleteConfirmation = confirm("Вы уверены, что хотите удалить файл?");
if (deleteConfirmation) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
}


let ageInput = prompt("Введите ваш возраст:");
let age = Number(ageInput);
if (age < 18) {
    console.log("Вы еще подросток");
} else if (age >= 18 && age <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}


let userInputTwo = prompt("Введите число:");
let numberTwo = Number(userInputTwo);
let result = (numberTwo % 2 === 0) ? "Четное число" : "Нечетное число";
console.log(result);

let dayInput = prompt("Введите номер дня недели (1-7):");
let dayNumber = Number(dayInput);
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "Понедельник";    
        break;
    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    default:
        dayName = "Некорректное значение";
}
console.log(dayName);


let firstInput = prompt("Введите первое число:");
let secondInput = prompt("Введите второе число:");
let firstNumber = Number(firstInput);
let secondNumber = Number(secondInput); 
if (firstNumber === secondNumber) {
    console.log("Числа равны");
} else {
    let result = (firstNumber > secondNumber) ? "Первое число больше" : "Второе число больше";
    console.log(result);
}

let monthInput = prompt("Введите номер месяца (1-12):");
let monthNumber = Number(monthInput);
let season;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        season = "Зима";
        break;
    case 3:
    case 4:
    case 5: 
        season = "Весна";
        break;
    case 6:
    case 7:
    case 8:
        season = "Лето";
        break;
    case 9:
    case 10:
    case 11:
        season = "Осень";
        break;
    default:
        season = "Некорректное значение";
}
console.log(season);
