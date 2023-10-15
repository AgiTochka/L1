//Функция принимает на вход число, возвращает true - если число является странным, и false - если число таковым не является
//Решение через перебор
function isStrangeNumber(num) {
    let sum = 0;
    //перебериаем все числа от 1 до num/2 (не существует делителей больше чем половина числа)
    for (let i = 1; i <= num / 2; i++) {
        //если число является делителем (при делении остаток равен 0) и не равно заданному числу (проверка нужна только в случае если делитель 1 и num=1),
        // суммируем
        if (num % i === 0 && num !== i) {
            sum += i;
        }
    }
    //возвращаем true если сумма равна числу, false если не равна
    return num === sum;
}
//Проверка
console.log(isStrangeNumber(6));//true 1+2+3=6
console.log(isStrangeNumber(28));//true
console.log(isStrangeNumber(495));//false



//Решение через нахождение простых множителей (имеет смысл только показать, что я знаю математику, потому что быстрее оно не работает, и выросшая сложность понимания кода вообще ничем не оправдана)
//Функция принимает на вход число, возвращает true - если число простое, false - если нет
function isPrime(num) {
    // Если число меньше или равно 1, оно не является простым
    if (num <= 1) return false;
    // Если число меньше или равно 3, оно является простым
    if (num <= 3) return true;
    // Если число делится на 2 или 3 без остатка, оно не является простым
    if (num % 2 === 0 || num % 3 === 0) return false;
    // Проверка на деление числа на числа вида 6k ± 1 (оптимизация, тк уже исключили числа, которые делятся на 2 и 3, таким образом исключаем лишний перебор)
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    // Если все проверки пройдены, число считается простым
    return true;
}

//Функция возвращает массив простых множителей числа num
function primeFactors(num) {
    let i = 2;
    let f = true; //нужен, чтобы выйти из цикла while, когда найдем наименьший простой множитель
    let sequence = [];
    if (isPrime(num)) { //если число простое, то оно и является наименьшим простым множителем
        return num;
    } else {
        //увеличиваем i, так образом приближаясь к наименьшему простому множителю
        while (i <= Math.sqrt(num) && f) {
            //число является наименьшим простым множителем, если num делится без остатка, и число простое
            if (num % i === 0 && isPrime(i)) {
                f = false;
                sequence.push(i); //добавили найденное простое число
                let arr = primeFactors(num/i);//вызвали эту же функцию с числом, результатом деления num на наименьший простой множитель
                sequence = sequence.concat(arr); // сложили два получившихся массива
            }
            i++;
        }
    }
    return sequence;
}

//функция принимает на вход массив чисел, а возвращает массив - результат произвдения всех возможных комбинаций
//например [a,b,c] вернет [ab, ac, bc, abc]
function getAllPossibleProducts(num) {
    let allCombinations = [];
    for (let r = 2; r <= num.length; r++) {  // генерируем комбинации элементов
        const combinations = getCombinations(num, r); // вызываем функцию, которая возвращает все комбинации массива длиной r
        allCombinations.push(...combinations);
    }
    let allProducts = [];
    //для каждой комбинации получаем произведение
    allCombinations.forEach(combination => {
        let product = 1;
        combination.forEach(num => {
            product *= num;
        });
        allProducts.push(product);
    });

    return allProducts;
}

//Функция принимает на вход массив и количество элементов в одной комбинации, возвращает массив комбинаций заданной длины
function getCombinations(arr, r) {
    const combinations = [];

    //Рекурсивная функция, получает на вход начало для обработки массива и текущую комбинацию
    function backtrack(start, currentCombination) {
        //если длина текущей комбинации равна длине комбинации, то пушим комбинацию и выходим из функции
        if (currentCombination.length === r) {
            combinations.push(currentCombination.slice());
            return;
        }
        //перебираем массив добавляя новый элемент в текущую комбинацию
        for (let i = start; i < arr.length; i++) {
            currentCombination.push(arr[i]);
            backtrack(i + 1, currentCombination); //вызываем эту функцию, чтобы добавить новый элемент в комбинацию
            currentCombination.pop(); //удаляем комбинацию, так как она уже добавлена в переменную
        }
    }
    backtrack(0, []);
    return combinations;
}

function isStrangeNumber2(num) {
    //1 не является странным числом
    if(num===1){
        return false;
    }
    //записываем в массив простые множетели числа
    let arr = primeFactors(num);
    //записываем в массив произведение всех комбинаций простых множителей
    let result = getAllPossibleProducts(arr);
    result = result.concat(arr);//складываем два массива
    let uniqueChars = [];
    result.forEach((element) => {//исключаем дубликаты
        if (!uniqueChars.includes(element)) {
            uniqueChars.push(element);
        }
    });
    //сумма изначально равна 1 т.к. 1 всегда является делителем, но нигде выше мы ее не учитывали
    let sum = 1;
    //суммируем все делители числа
    for (let i = 0; i < uniqueChars.length; i++){
        if(uniqueChars[i] !== num){
            sum += uniqueChars[i];
        }
    }
    //если сумма делителей числа равна числу, то вернет true
    return sum === num;
}

//Проверка
console.log(isStrangeNumber2(6));//true 1+2+3=6
console.log(isStrangeNumber2(28));//true
console.log(isStrangeNumber2(495));//false

/*
console.time('second')
isStrangeNumber2(600000);
isStrangeNumber2(280000);
isStrangeNumber2(496000);
console.timeEnd('second');

console.time('first')
isStrangeNumber(600000);
isStrangeNumber(280000);
isStrangeNumber(496000);
console.timeEnd('first');*/
