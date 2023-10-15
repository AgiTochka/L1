// Асинхронная функция
async function asyncFunction() {
    try {
        // Ожидаем выполнения асинхронной операции (например, запроса к серверу или чтения файла)
        const result = await someAsyncOperation();
        // Возвращаем результат выполнения
        return result;
    } catch (error) {
        // Обрабатываем ошибку, если что-то пошло не так
        throw error;
    }
}

// Асинхронная операция (заглушка)
function someAsyncOperation() {
    return new Promise((resolve) => {
        // Имитация асинхронной операции, например, задержка на 5 секунд
        setTimeout(() => {
            resolve('Результат асинхронной операции');
        }, 5000);
    });
}

// Вызываем асинхронную функцию
asyncFunction()
    .then((result) => {
        console.log('Результат выполнения асинхронной функции:', result);
    })
    .catch((error) => {
        console.error('Ошибка в асинхронной функции:', error);
    });
