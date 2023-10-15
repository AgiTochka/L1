// Подключаем библиотеку Moment.js
const moment = require('moment');

// Функция для форматирования текущей даты в заданном формате
//За формат даты отвечает метод библиотеки moment - format()
function getCurrentDateFormatted(format) {
    return moment().format(format);
}

// Функция для вычисления разницы между двумя датами
// Принимает на вход две даты и в чем измерять разницу (днях, неделях, месяцах, часах и тд)
function getDateDifference(date1, date2, unit) {
    const momentDate1 = moment(date1);
    const momentDate2 = moment(date2);
    return momentDate1.diff(momentDate2, unit);
}

// Экспортируем функции для использования в других модулях
module.exports = {
    getCurrentDateFormatted,
    getDateDifference,
};
