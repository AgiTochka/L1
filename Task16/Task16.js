const dateUtils = require('./dataModul'); // Путь к модулю

//Пример форматирования текущей даты
const formattedDate = dateUtils.getCurrentDateFormatted('DD.MM.YY');
console.log('Текущая дата:', formattedDate);

//Пример вычисления разницы между датами
const date2 = '2023-09-29';
const date1 = '2023-10-13';
const differenceInDays = dateUtils.getDateDifference(date1, date2, 'week');
console.log('Разница в неделях:', differenceInDays);
