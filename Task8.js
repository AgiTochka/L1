// Функция, которая принимает массив функций и возвращает новую функцию
function executeFunctions(functionsArray) {
    return function () { // Внутренняя функция, которая будет возвращена
        const results = []; // Массив для хранения результатов вызовов функций
        for (const func of functionsArray) { // Перебираем массив функций
            results.push(func()); // Вызываем каждую функцию и добавляем результат в массив
        }
        return results; // Возвращаем массив результатов
    };
}

//Проверка
const function1 = () => 1;
const function2 = () => 2;
const function3 = () => 3;

const arrayOfFunctions = [function1, function2, function3];
const executeAll = executeFunctions(arrayOfFunctions); // Создаем функцию с замыканием
const resultsArray = executeAll(); // Вызываем функцию с замыканием
console.log(resultsArray); // Выведет: [1, 2, 3]
