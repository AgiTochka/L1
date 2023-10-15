function customParseJSON(jsonString) {
    let index = 0; // Индекс символа в строке
    const length = jsonString.length; // Длина строки JSON

    // Функция для обработки ошибок
    function throwError(message) {
        throw new SyntaxError(`JSON parsing error: ${message} at position ${index}`);
    }

    // Функция для считывания символа из строки и продвижения индекса
    function consumeChar() {
        return jsonString[index++];
    }

    // Функция для считывания пробелов и перевода курсора
    function consumeWhitespace() {
        while (index < length && /\s/.test(jsonString[index])) {
            index++;
        }
    }

    // Функция для считывания строки
    function parseString() {
        let result = '';
        if (jsonString[index] === '"') {
            consumeChar(); // Пропускаем открывающую кавычку
        }

        while (index < length) {
            const char = consumeChar();
            if (char === '"') {
                return result; // Завершаем парсинг строки при закрывающей кавычке
            } else if (char === '\\') {
                // Обработка экранированных символов
                const nextChar = consumeChar();
                if (nextChar === 'n') {
                    result += '\n';
                } else if (nextChar === 't') {
                    result += '\t';
                } else {
                    result += nextChar;
                }
            } else {
                result += char;
            }
        }
        throwError('Unterminated string');
    }

    // Функция для считывания числа
    function parseNumber() {
        let result = '';
        while (index < length && /\d|\.|e|E|\+|\-/.test(jsonString[index])) {
            result += consumeChar();
        }
        const number = parseFloat(result);
        if (isNaN(number)) {
            throwError('Invalid number');
        }
        return number;
    }

    // Функция для считывания значения JSON
    function parseValue() {
        consumeWhitespace();
        const char = jsonString[index];
        if (char === '{') {
            return parseObject();
        } else if (char === '[') {
            return parseArray();
        } else if (char === '"') {
            return parseString();
        } else if (char === 't' && jsonString.slice(index, index + 4) === 'true') {
            index += 4;
            return true;
        } else if (char === 'f' && jsonString.slice(index, index + 5) === 'false') {
            index += 5;
            return false;
        } else if (char === 'n' && jsonString.slice(index, index + 4) === 'null') {
            index += 4;
            return null;
        } else if (/\d|\-/.test(char)) {
            return parseNumber();
        } else {
            throwError(`Unexpected character "${char}"`);
        }
    }

    // Функция для считывания объекта JSON
    function parseObject() {
        const obj = {};
        consumeChar(); // Пропускаем открывающую фигурную скобку
        while (index < length) {
            consumeWhitespace();
            const char = consumeChar();
            if (char === '}') {
                return obj; // Завершаем парсинг объекта при закрывающей фигурной скобке
            } else if (char !== '"') {
                throwError('Expected property name in double quotes');
            }
            const key = parseString();
            consumeWhitespace();
            if (consumeChar() !== ':') {
                throwError('Expected colon after property name');
            }
            const value = parseValue();
            obj[key] = value;
            consumeWhitespace();
            const c = consumeChar()
            if (c === '}') {
                return obj; // Завершаем парсинг объекта при закрывающей фигурной скобке
            } else if (c !== ',') {
                throwError('Expected comma after property value');
            }
        }
        throwError('Unterminated object');
    }

    // Функция для считывания массива JSON
    function parseArray() {
        const arr = [];
        if( jsonString[index] === "["){
            consumeChar(); // Пропускаем открывающую квадратную скобку
        }
        while (index < length) {
            consumeWhitespace();
            const char = jsonString[index];
            if (char === ']') {
                return arr; // Завершаем парсинг массива при закрывающей квадратной скобке
            }
            const value = parseValue();
            arr.push(value);
            consumeWhitespace();
            const c = consumeChar()
            if (c === ']') {
                return arr; // Завершаем парсинг массива при закрывающей квадратной скобке
            } else if (c !== ',') {
                throwError('Expected comma after array element');
            }
        }
        throwError('Unterminated array');
    }

    // Начинаем парсинг с корневого объекта
    return parseValue();
}

// Пример использования
const jsonString = '{"name":"John","age":30,"hobbies":["reading","coding"],"address":{"city":"New York","zip":"10001"}}';
try {
    const jsonObject = customParseJSON(jsonString);
    console.log(jsonObject);
} catch (error) {
    console.error(error.message);
}
