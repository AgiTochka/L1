function outerFunction() {
    let outerVariable = 10; // Переменная во внешней функции

    function innerFunction() {
        console.log(outerVariable); // Внутренняя функция имеет доступ к outerVariable
    }
    outerVariable++;

    return innerFunction; // Возвращаем внутреннюю функцию
}

const closure = outerFunction(); // Вызываем внешнюю функцию и сохраняем возвращенную внутреннюю функцию

// Теперь внутренняя функция closure имеет доступ к outerVariable, даже после завершения outerFunction
closure(); // Выведет: 11
closure(); // Выведет: 11