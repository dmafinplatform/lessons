
localStorage.setItem('greeting', 'Привет, мир!');
let greeting = localStorage.getItem('greeting');
console.log(greeting);


localStorage.removeItem('greeting');
greeting = localStorage.getItem('greeting');
console.log(greeting); 


const user = {
    name: 'Иван',
    age: 30,
    city: 'Москва'
};
localStorage.setItem('user', JSON.stringify(user));

const storedUser = localStorage.getItem('user');
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser);


parsedUser.country = 'Россия';
localStorage.setItem('user', JSON.stringify(parsedUser));
const updatedStoredUser = localStorage.getItem('user');
const updatedParsedUser = JSON.parse(updatedStoredUser);
console.log(updatedParsedUser);


const existingUser = localStorage.getItem('user');
if (existingUser) {
    const userData = JSON.parse(existingUser);
    console.log('Существующий пользователь:', userData);
}
else {
    const newUser = {
        name: 'Анна',
        age: 25,
        city: 'Санкт-Петербург'
    };
    localStorage.setItem('user', JSON.stringify(newUser));
    console.log('Создан новый пользователь:', newUser);
}   


localStorage.clear();
const testItem = localStorage.getItem('testKey');
console.log(testItem); 


const tasks = [
    { title: 'Купить продукты', completed: false },
    { title: 'Позвонить другу', completed: true },
    { title: 'Прочитать книгу', completed: false }
];
localStorage.setItem('tasks', JSON.stringify(tasks));
const storedTasks = localStorage.getItem('tasks');
const parsedTasks = JSON.parse(storedTasks);
console.log('Список задач:', parsedTasks);


parsedTasks[0].completed = true;
localStorage.setItem('tasks', JSON.stringify(parsedTasks));
const updatedStoredTasks = localStorage.getItem('tasks');
const updatedParsedTasks = JSON.parse(updatedStoredTasks);
console.log('Обновленный список задач:', updatedParsedTasks);

