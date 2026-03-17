# Лабораторная работа №19. Введение в JavaScript. Сравнение с C#

## Введение в JavaScript. Сравнение с C#

**ФИО:** Rudy rudy ruyd
**Группа:** ИСП-233
**Дата:** 18.03.2026

---

## Цель работы

- Познакомиться с языком программирования JavaScript
- Понять его роль в web-разработке
- Сравнить основные концепции JavaScript и C#
- Научиться запускать JavaScript код в браузере и через Node.js

> [!NOTE]
> JavaScript - основной язык программирования для фронтенд‑разработки.Практически каждый сайт использует его для интерактивности.

---

# Описание

В ходе лабораторной работы был изучен базовый синтаксис языка
JavaScript. Были рассмотрены основные конструкции языка:

- циклы (for, while, do...while)
- функции
- массивы
- объекты

> [!TIP]
> В отличие от C#, JavaScript имеет **динамическую типизацию**, поэтому переменные могут менять тип во время выполнения программы.

---

# Сравнение JavaScript и C

---

JavaScript C#

динамическая типизация строгая типизация

функции являются значениями используются методы

объекты можно создавать без класса требуется объявление класса

массив может содержать разные типы массив содержит элементы одного
типа

---

> [!IMPORTANT]
> Несмотря на различия, многие базовые конструкции (циклы, условия, функции) выглядят почти одинаково в JavaScript и C#.

---

# Структура проекта

    Lab19_LearnJs_FIO
    │
    ├── index.html
    ├── main.js
    ├── README.md
    └── img
        ├── gitPushLab19_FIO.png
        ├── step5_loopsLab19_FIO.png
        ├── step6_functionsLab19_FIO.png
        ├── step7_arraysLab19_FIO.png
        └── step8_objectsLab19_FIO.png

> [!WARNING]
> Перед выполнением команд Git убедитесь, что на компьютере установлен Git и выполнена авторизация в GitHub.

---

# Подключение JavaScript

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Lab19 JavaScript</title>
	</head>
	<body>
		<h1>JavaScript Lab</h1>

		<script src="main.js"></script>
	</body>
</html>
```

> [!TIP]
> Подключать `<script>` рекомендуется в конце `<body>`, чтобы страница загрузилась быстрее.

---

# Циклы в JavaScript

## Вывод чисел и сумма

```javascript
for (let i = 1; i <= 10; i++) {
	console.log(i)
}

for (let i = 1; i <= 10; i++) {
	if (i % 2 === 0) {
		console.log(i)
	}
}

let sum = 0
for (let i = 1; i <= 10; i++) {
	sum += i
}

console.log('Sum:', sum)
```

> [!NOTE]
> Синтаксис цикла `for` почти полностью совпадает с C#.

---

# Цикл while

```javascript
let number = 5

while (number >= 0) {
	console.log(number)
	number--
}
```

> [!TIP]
> Используйте `while`, когда заранее неизвестно количество итераций.

---

# break и continue

```javascript
for (let i = 1; i <= 10; i++) {
	if (i === 5) {
		continue
	}

	if (i === 8) {
		break
	}

	console.log(i)
}
```

> [!WARNING]
> `break` полностью останавливает цикл, а `continue` пропускает текущую итерацию.

---

# Вложенные циклы

```javascript
for (let i = 1; i <= 4; i++) {
	let stars = ''

	for (let j = 1; j <= i; j++) {
		stars += '*'
	}

	console.log(stars)
}
```

> [!NOTE]
> Вложенные циклы часто используются при работе с таблицами и матрицами.

---

# Функции

```javascript
function multiply(a, b) {
	return a * b
}

console.log(multiply(4, 5))
```

> [!IMPORTANT]
> В JavaScript **не нужно указывать тип возвращаемого значения**.

---

# Стрелочные функции

```javascript
const add = (a, b) => a + b

console.log(add(3, 7))
```

> [!TIP]
> Arrow functions позволяют писать функции значительно короче.

---

# Массивы

```javascript
let colors = ['red', 'green', 'blue']

console.log(colors[0])
console.log(colors[colors.length - 1])

colors[1] = 'yellow'

console.log(colors)
```

> [!NOTE]
> Массив в JavaScript может содержать **разные типы данных одновременно**.

---

# Работа с массивом students

```javascript
let students = []

students.push('Ivan')
students.push('Anna')
students.push('Petr')

students.pop()

console.log(students)
```

---

# Поиск элемента

```javascript
let cities = ['Moscow', 'Berlin', 'Paris']

let city = 'Berlin'

if (cities.includes(city)) {
	console.log('City index:', cities.indexOf(city))
}
```

> [!TIP]
> `includes()` - самый простой способ проверить наличие элемента в массиве.

---

# Объекты

```javascript
let book = {
	title: 'JavaScript Guide',
	author: 'John Smith',
	year: 2020,
}

console.log(book.title)
console.log(book.author)
console.log(book.year)

book.year = 2024
```

> [!IMPORTANT]
> В JavaScript объекты можно создавать **без объявления класса**.

---

# Объект с методом

```javascript
let car = {
	brand: 'Toyota',
	year: 2022,

	getInfo() {
		console.log(this.brand + ' ' + this.year)
	},
}

car.getInfo()
```

---

# Перебор свойств объекта

```javascript
let product = {
	name: 'Laptop',
	price: 1200,
	brand: 'Lenovo',
}

for (let key in product) {
	console.log(key + ': ' + product[key])
}
```

> [!NOTE]
> Цикл `for...in` используется для перебора свойств объекта.

---

# Вывод

В ходе лабораторной работы были изучены основные возможности языка
JavaScript:

- циклы
- функции
- массивы
- объекты

Также было проведено сравнение JavaScript с языком C#.\
JavaScript оказался более гибким благодаря динамической типизации и
возможности создавать объекты без классов.

> [!TIP]
> JavaScript используется не только во фронтенде, но и на сервере благодаря среде выполнения **Node.js**.
