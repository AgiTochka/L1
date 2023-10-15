// Класс Shape (фигура)
class Shape {
    constructor() {
        // Конструктор базового класса
    }

    // Метод для расчета площади (по умолчанию возвращает 0)
    calculateArea() {
        return 0;
    }

    // Метод для расчета периметра (по умолчанию возвращает 0)
    calculatePerimeter() {
        return 0;
    }
}

// Подкласс Rectangle (прямоугольник)
class Rectangle extends Shape {
    constructor(width, height) {
        super(); // Вызываем конструктор базового класса
        this.width = width;
        this.height = height;
    }

    // Расчет площади прямоугольника
    calculateArea() {
        return this.width * this.height;
    }

    // Расчет периметра прямоугольника
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Подкласс Circle (круг)
class Circle extends Shape {
    constructor(radius) {
        super(); // Вызываем конструктор базового класса
        this.radius = radius;
    }

    // Расчет площади круга
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    // Расчет периметра круга (длина окружности)
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Подкласс Triangle (треугольник)
class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super(); // Вызываем конструктор базового класса
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        // Проверка на то, что заданные стороны могут образовать треугольник
        if (!this.isTriangle()) {
            throw new Error("Заданные стороны не образуют треугольник");
        }
    }


    // Метод для проверки, что заданные стороны образуют треугольник
    //Использовано неравенство треугольника: сумма длин двух любых сторон треугольника должна быть больше длины третьей стороны
    isTriangle() {
        return (
            this.side1 + this.side2 > this.side3 &&
            this.side1 + this.side3 > this.side2 &&
            this.side2 + this.side3 > this.side1
        );
    }

    // Расчет площади треугольника по формуле Герона
    calculateArea() {
        const s = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }

    // Расчет периметра треугольника
    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

// Пример использования
const rectangle = new Rectangle(5, 4);
console.log("Прямоугольник:");
console.log("Площадь:", rectangle.calculateArea());
console.log("Периметр:", rectangle.calculatePerimeter());

const circle = new Circle(3);
console.log("Круг:");
console.log("Площадь:", circle.calculateArea());
console.log("Периметр:", circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log("Треугольник:");
console.log("Площадь:", triangle.calculateArea());
console.log("Периметр:", triangle.calculatePerimeter());

try {
    const invalidTriangle = new Triangle(1, 2, 5); // Заданные стороны не образуют треугольник
} catch (error) {
    console.error(error.message); // Выведет сообщение об ошибке
}
