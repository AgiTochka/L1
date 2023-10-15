//Функция принимает на вход строку, возвращает значение true - если строка явлется палиндромом, и false - если не является
function isPalindrom(str) {
    let string = str.replaceAll(" ", '')//Убираем все пробелы в строке, так как они не имеют значения в определении палиндрома
        .replace(/[^a-zA-Z0-9]/g,"") //Убираем знаки препинания
        .toLowerCase(); //Меняем регистр букв на нижний
    //Преобразуем строку в массив с помощью split(), переворачиваем reverse(), возвращаем строку с помощью join()
    return string.split('').reverse().join('') === string;
}

console.log(isPalindrom('А Вера, котяра, – харя Токарева'));//true
console.log(isPalindrom('А наша Зифа к шуму – как уму шкаф из «Ашана»'));//true
console.log(isPalindrom('Гена, уху Ленин ел, уху, а не г…!'));//true
console.log(isPalindrom('12345'))//false
