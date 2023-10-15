const functionCollection = [ //Массив функций
    function () {
        let a = fib(40); //Добавила функцию, которая долго выполняется, чтобы удостовериться в последовательном вызове
        console.log("Hello world!1");
        console.log(a);
    },
    function () {
        console.log("Hello world!2");
    },
    function () {
        console.log("Hello world!3");
    }
];

function fib(n) { //Просто пример долгой функции
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
let i = 1
for (let func of functionCollection) {
    console.log(i++); //Выводим порядковый номер функции и увеличиваем его
    func(); //Вызываем функцию
}