//Функция принимает на вход JSON объект, возвращает строку
function customStringify(obj) {
    // Обработка разных типов данных
    //Если объект имеет тип число, булевый или null то возвращается просто объект преобразованный в строку
    if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
        return String(obj);
    } else if (typeof obj === 'string') { //Если объект имеет тип строка, то оборачиваем в ковычки
        return `"${obj}"`;
    } else if (Array.isArray(obj)) { //Если объект массив, то разбираем на отдельные объекты и обрабатываем каждый отдельно
        const items = obj.map((item) => customStringify(item));
        return `[${items.join(',')}]`; //соединяем получившиеся строки через запятую в квадрытных скобочках
    } else if (typeof obj === 'object') { //Если тип данных объект, то разделяем на ключ значение
        const properties = [];
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = customStringify(obj[key]); //значение обрабатываем как отдельный объект
                properties.push(`"${key}":${value}`); //Объединяем в строку с нужной пунктуацией и добавляем в массив
            }
        }
        return `{${properties.join(',')}}`; //массив преобразуем в строку разделяя элементы запятой и добавляя нужные скобочки
    }
}

// Пример использования
const jsonObject = {
    name: 'John',
    age: 30,
    hobbies: ['reading', 'coding'],
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const jsonString = customStringify(jsonObject);
console.log(jsonString);
