
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}


let j = 1;
while (j <= 10) {
    if (j === 5) {
        j++;
        continue;
    }
    if (j === 8) {
        break;
    }
    console.log(j);
    j++;
}


let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);
// Цикл do-while отличается от обычного while тем, что тело цикла выполняется хотя бы один раз перед проверкой условия. В цикле while условие проверяется перед выполнением тела цикла, поэтому если условие изначально ложно, тело цикла может не выполниться ни разу.


let userInput;
while (true) {
    userInput = prompt("Введите число (введите 10 для выхода):");
    if (Number(userInput) === 10) {
        console.log("Вы ввели 10, цикл завершен.");
        break;
    }
    console.log("Вы ввели: " + userInput);
}


for (let n = 1; n <= 10; n++) {
    console.log(n);
}


let iTwo = 1;
for (;;) {
    if (iTwo > 100) {
        break;
    }
    console.log(iTwo);
    iTwo++;
}


let numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

// 1. В каких случаях вы бы использовали `while`, а в каких — `for`?
// 2. Напишите пример, когда лучше использовать цикл `while`, и пример, когда лучше использовать цикл `for`.

// Ответ:
// 1. Цикл `while` лучше использовать, когда количество итераций заранее неизвестно и зависит от определенного условия, которое может изменяться в процессе выполнения цикла. Цикл `for` предпочтительнее использовать, когда известно точное количество итераций или когда нужно пройтись по элементам коллекции (например, массиву).


for (let mm = 10; mm >= 1; mm--) {
    console.log(mm);
}


for (let p = 1; p <= 10; p++) {
    if (p % 2 !== 0) {
        continue;
    }
    console.log(p);
}
