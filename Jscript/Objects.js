
let person = {
    name: "Иван",
    age: 30,
    city: "Москва"
};
console.log(person);


console.log("Имя: " + person.name + ", Возраст: " + person.age);
person.city = "Санкт-Петербург";
console.log("Обновленный город: " + person.city);


person.greet = function() {
    console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет!");
}
person.greet();


let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
console.log(obj1 == obj2); 
console.log(obj1 === obj2); 
// Результат будет false, потому что объекты сравниваются по ссылке, а не по значению.


let book = {
    title: "Война и мир",
    author: "Лев Толстой",
    details: {
        year: 1869,
        pages: 1225
    }
};
let bookCopy = Object.assign({}, book);
bookCopy.details.year = 1870;
console.log(book.details.year); 
// Результат будет 1870, потому что Object.assign() создает поверхностную копию объекта. Вложенные объекты копируются по ссылке, поэтому изменение во вложенном объекте влияет на оба объекта.


let calculator = {
    a: 5,
    b: 10,
    sum: function() {
        return this.a + this.b;
    },
    multiply: function() {
        return this.a * this.b;
    }
};
console.log("Сумма: " + calculator.sum());
console.log("Произведение: " + calculator.multiply());


const car = {
    brand: "Toyota",
    model: "Corolla"
};
car.model = "Camry"; 
console.log(car);
// Изменение свойств объекта возможно, потому что `const` защищает только ссылку на объект, а не его содержимое.