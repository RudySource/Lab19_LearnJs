// // for (let i = 0; i < 5; i++) {
// // 	console.log(i)
// // }
// // let sum = 0
// // for (let i = 0; i <= 10; i++) {
// // 	if (i % 2 == 0) {
// // 		console.log(i)
// // 	}
// // 	sum += i
// // }
// // console.log(sum)

// // let count = 0
// // while (count < 3) {
// // 	console.log(count)
// // 	count++
// // }

// // let number = 5
// // while (number >= 0) {
// // 	console.log(number)
// // 	number--
// // }

// // let value = 0
// // do {
// // 	console.log(value)
// // 	value++
// // } while (value < 5)

// for (let i = 0; i <= 10; i++) {
// 	if (i != 5 && i != 8) {
// 		console.log(i)
// 	} else if (i == 8) {
// 		break
// 	}
// }

// for (let i = 1; i <= 3; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(`i = ${i}, j = ${j}`)
// 	}
// }
// let text = '*'
// for (let i = 1; i < 5; i++) {
// 	console.log(text)
// 	text += '*'
// }

// function sum(a, b) {
// 	return a + b
// }
// console.log(sum(3, 4))

// function multiply(a, b) {
// 	return a * b
// }
// console.log(multiply(3, 4))

// function printInfo(name, age) {
// 	console.log(`Name: ${name}, Age: ${age}`)
// }

// printInfo('Dasha', 19)

// function calculateDiscount(price, discount = 10) {
// 	return price - (price * discount) / 100
// }
// console.log(calculateDiscount(100, 20))
// console.log(calculateDiscount(100))

// let colors = ['green', 'black', 'white']
// colors[1] = 'red'
// console.log(colors[0], colors[colors.length - 1], colors)

// let students = []
// students.push('Alice', 'Bob', 'Charlie')
// students.pop()
// console.log(students)

// let numbers2 = [10, 20, 30]
// for (let i = 0; i < numbers2.length; i++) {
// 	console.log(numbers2[i])
// }

// let city = ['Moscow', 'New York', 'Paris']
// console.log(city.includes('Paris'), city.indexOf('Paris'))

// let user2 = {
// 	name: 'Dasha',
// 	age: 19,
// 	city: 'Moscow',
// }
// console.log(user2['name'], user2.age, user2.city)

// let book = {
// 	title: 'The Great Gatsby',
// 	author: 'F. Scott Fitzgerald',
// 	year: 1925,
// }
// book.year = 2026
// console.log(book.title, book.author, book.year)

let car = {
	brand: 'Toyota',
	year: 2020,
	getInfo: function () {
		console.log(`Brand: ${this.brand}, Year: ${this.year}`)
	},
}
console.log(car.getInfo())

let product = {
	name: 'Laptop',
	price: 1000,
	model: 'XPS 15',
	type: 'Electronics',
}
for (let key in product) {
	console.log(`${key}: ${product[key]}`)
}
