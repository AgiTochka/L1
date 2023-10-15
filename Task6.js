const people = [
    { name: 'Настя', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Алиса', age: 25 },
    { name: 'Eve', age: 20 }
];

// Применяем функцию для сортировки, сравнение написано через передачу необязательного параметра, который и настраивает необходимое правило сортировки https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
people.sort((a, b) => {
    // Сначала сравниваем возраст
    if (a.age !== b.age) {
        return a.age - b.age;
    }
    // Если возрасты равны, сравниваем по имени
    return a.name.localeCompare(b.name);
});

console.log(people);
