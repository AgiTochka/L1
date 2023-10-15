// Определение класса для узла связанного списка
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Функция для преобразования JSON в связанный список
function jsonToLinkedList(jsonArray) {
    // Проверка на пустой входной массив
    if (!jsonArray || jsonArray.length === 0) {
        return null;
    }
    // Создаем первый узел
    const head = new ListNode(jsonArray[0]);
    let current = head;

    // Проходим по JSON-массиву и создаем узлы связанного списка
    for (let i = 1; i < jsonArray.length; i++) {
        const newNode = new ListNode(jsonArray[i]);
        current.next = newNode;
        current = newNode;
    }
    return head; // Возвращаем голову (первый узел) связанного списка
}

// Пример использования функции
const jsonArray = [
    42,             // Число
    "строка",       // Строка
    true,           // Булево значение
    null,           // Значение null
    { key: "value" }, // Объект
    [1, 2, 3],      // Массив
    { nested: { deep: "data" } } // Вложенный объект
];
const linkedList = jsonToLinkedList(jsonArray);

// Выводим связанный список для проверки
let current = linkedList;
while (current) {
    console.log(current.data);
    current = current.next;
}
