// Создаем объект, представляющий книгу
const book = {
    title: "Программирование на JavaScript",
    author: "Джон Доу",
    year: 2021,

    // Метод для получения названия книги
    getTitle: function () {
        return this.title;
    },

    // Метод для изменения названия книги
    setTitle: function (newTitle) {
        this.title = newTitle;
    },

    // Метод для получения автора книги
    getAuthor: function () {
        return this.author;
    },

    // Метод для изменения автора книги
    setAuthor: function (newAuthor) {
        this.author = newAuthor;
    },

    // Метод для получения года издания книги
    getYear: function () {
        return this.year;
    },

    // Метод для изменения года издания книги
    setYear: function (newYear) {
        this.year = newYear;
    },
};

// Пример использования методов
console.log(book.getTitle()); // Выведет: "Программирование на JavaScript"
book.setTitle("Новое название"); // Изменяем название книги
console.log(book.getTitle()); // Выведет: "Новое название"
console.log(book.getAuthor()); // Выведет: "Джон Доу"
book.setAuthor("Новый автор"); // Изменяем автора книги
console.log(book.getAuthor()); // Выведет: "Новый автор"
console.log(book.getYear()); // Выведет: 2021
book.setYear(2023); // Изменяем год издания книги
console.log(book.getYear()); // Выведет: 2022
