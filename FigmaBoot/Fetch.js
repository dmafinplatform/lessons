fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => console.log(data))    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); // Обрабатываем ошибку

const data = { title: "Новый пост", body: "Содержимое поста", userId: 1 };

fetch('https://jsonplaceholder.typicode.com/posts', {
 method: 'POST', // Указываем метод
 headers: {
   'Content-Type': 'application/json' // Указываем тип данных
 },
 body: JSON.stringify(data) // Преобразуем объект в JSON-строку
})
 .then(response => response.json())
 .then(data => console.log('Успех:', data))
 .catch(error => console.error('Ошибка:', error));


fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response => response.json()) // Преобразуем ответ в JSON
 .then(data => console.log(data))    // Работаем с полученными данными
 .catch(error => console.error('Ошибка:', error)); 



fetch('https://jsonplaceholder.typicode.com/posts/1', {
 method: 'PUT',
 headers: {
   'Content-Type': 'application/json'
 },
 body: JSON.stringify({
    id: 1,
    title: 'Новый заголовок поста 2026',
    body: 'Обновленное содержимое',
    userId: 1,
  }),
})
 .then(response => response.json())
 .then(data => console.log('Обновлено:', data))
 .catch(error => console.error('Ошибка:', error));

 fetch('https://jsonplaceholder.typicode.com/posts/1', {
   method: 'DELETE'
 })
   .then(() => console.log('Пост удален'))
   .catch(error => console.error('Ошибка:', error));


   async function updatePost() {
  const url = 'https://jsonplaceholder.typicode.com';
  
  const data = {
    id: 1,
    title: 'Новый заголовок поста 2026',
    body: 'Обновленное содержимое', // При PUT методе важно передавать все поля ресурса
    userId: 1
  };
try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при обновлении: ${response.status}`);
    }
        const result = await response.json();
    console.log('Успешное обновление:', result);
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}


fetch('https://jsonplaceholder.typicode.com/comments', {
  method: 'GET',
  headers: {
    'User-Agent': 'MyApp/1.0',
    'Authorization': 'Bearer YOUR_TOKEN_HERE',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Ошибка:', error));
  