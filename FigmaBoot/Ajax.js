// Ajax предназначен для динамической работы и XMLHttpRequest 
// для асинхронного обмена данными с сервером

var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.error('Ошибка сервера: ' + xhr.status);
    }
};

xhr.onerror = function() {
    console.error('Сетевая ошибка');
};

xhr.send();


const xhrTwo = new XMLHttpRequest();

xhrTwo.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhrTwo.onload = function() {
    if (xhrTwo.status === 200) {
    const posts = JSON.parse(xhrTwo.responseText);

const ul = document.createElement('ul');

posts.forEach(post => {
    const li = document.createElement('li');
    li.textContent = post.title; 
    ul.appendChild(li); 
                });
                
document.getElementById('container').appendChild(ul);
    } else {
        console.error('Ошибка при загрузке данных:', xhrTwo.statusText);
        }
};

xhrTwo.onerror = function() {
    console.error('Ошибка соединения');
        };
        
xhrTwo.send();


