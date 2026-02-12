const myButton = document.querySelector('button');
    myButton.addEventListener('click', function() {
    console.log('Кнопка нажата (через addEventListener)!');
    });


const button = document.getElementById('jsButton');
    button.addEventListener('click', function() {
    console.log('Событие обработано через JS');
});

const myDiv = document.getElementById('myDiv');
    myDiv.addEventListener('click', () => {
    myDiv.style.backgroundColor = 'blue';
});

    myDiv.addEventListener('mouseenter', () => {
    console.log('Элемент нажат при наведении курсора');
});

const textInput = document.getElementById('textInput');
textInput.addEventListener('keyup', function(event) {
        console.log(event.target.value);
    });

const link = document.getElementById('myLink');

  link.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращает стандартное поведение (переход)
    console.log('Переход по ссылке отменен');
  });

const list = document.getElementById('myList');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('keyboardInput');

    inputElement.addEventListener('keydown', function(event) {
        console.log('Нажата клавиша:');
        console.log('Код клавиши (key):', event.key); 
        console.log('Физический код (code):', event.code); 
    });
});
});



