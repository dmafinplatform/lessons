
setTimeout(() => {
   console.log('Привет, мир!');
 }, 2000); 



// Вывод

const intervalId = setInterval(() => {
function getCurrentTimeHHMMSS() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}

console.log(getCurrentTimeHHMMSS()); 
 }, 1000);

  setTimeout(() => {
   clearInterval(intervalId);
 }, 5000);


   function fetchData() {
  return new Promise((resolve, reject) => { 
    setTimeout(() => { 
      resolve("Данные получены!"); 
    }, 3000);
  });
}

fetchData()
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error("Произошла ошибка:", error);
  });

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Ошибка загрузки!'); 
    }, 2000); 
  });
}


fetchData()
  .then(data => {
    console.log("Данные успешно загружены:", data); 
  })
  .catch(error => {
    console.error("Произошла ошибка:", error); 
  });


  async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log("Успех:", data);
    return data; 
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error; 
  } finally {
    console.log("Получение данных завершено.");
  }
}
async function main() {
  const result = await fetchDataAsync();
  console.log("Финальный результат в main:", result); // Выведет "Данные получены!"
}
main();


function fetchDataWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Ошибка загрузки!'));
    }, 2000); // 2000 миллисекунд = 2 секунды
  });
}

async function fetchDataWithErrorAsync() {
  try {
    const data = await fetchDataWithError();
    console.log("Данные успешно получены:", data); // Этот код не выполнится
    return data;
  } catch (error) {
    // Перехватываем ошибку, которая была выброшена в fetchDataWithError
    console.error("Произошла ошибка:", error.message);
    return null; // Возвращаем null или другое значение при ошибке
  }
}


fetchDataWithErrorAsync();

const task1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача 1 выполнена (1 секунда)"); 
    }, 1000); 
  });
};


const task2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Задача 2 выполнена (2 секунды)"); 
    }, 2000); 
  });
};


async function runTasks() {
  console.log("Запуск задач...");
  const result1 = await task1(); 
  console.log(result1);

  const result2 = await task2(); 
  console.log(result2);
  console.log("Все задачи завершены.");
}


runTasks();


function taskA() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Результат Task A (2 сек)');
    }, 2000);
  });
}

function taskB() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Результат Task B (3 сек)');
    }, 3000);
  });
}


async function runTasks() {
  console.log('Запускаем задачи...');
  try {
    const results = await Promise.all([taskA(), taskB()]);
    console.log('Все задачи выполнены!');
    console.log('Результаты:', results); 
  } catch (error) {
    console.error('Произошла ошибка:', error);
  }
}

runTasks();

async function delayedMessage(message, delay) {
  console.log(`Ожидаем ${delay} мс...`); 

  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message); 
      resolve();
    }, delay);
  });
}


async function runExample() {
  await delayedMessage("Привет, мир через 2 секунды!", 2000);
  console.log("Прошло 2 секунды, сообщение выведено.");

  await delayedMessage("Это сообщение появится через 1 секунду.", 1000);
  console.log("Прошло еще 1 секунда, сообщение выведено.");
}

runExample();

