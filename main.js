// for (let i = 0; i < 5; i++) {
// 	console.log(i)
// }
// let sum = 0
// for (let i = 0; i <= 10; i++) {
// 	if (i % 2 == 0) {
// 		console.log(i)
// 	}
// 	sum += i
// }
// console.log(sum)

// let count = 0
// while (count < 3) {
// 	console.log(count)
// 	count++
// }

// let number = 5
// while (number >= 0) {
// 	console.log(number)
// 	number--
// }

// let value = 0
// do {
// 	console.log(value)
// 	value++
// } while (value < 5)

for (let i = 0; i <= 10; i++) {
	if (i != 5 && i != 8) {
		console.log(i)
	} else if (i == 8) {
		break
	}
}

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log(`i = ${i}, j = ${j}`)
	}
}
let text = '*'
for (let i = 1; i < 5; i++) {
	console.log(text)
	text += '*'
}

function sum(a, b) {
	return a + b
}
console.log(sum(3, 4))

function multiply(a, b) {
	return a * b
}
console.log(multiply(3, 4))

function printInfo(name, age) {
	console.log(`Name: ${name}, Age: ${age}`)
}

printInfo('Dasha', 19)

function calculateDiscount(price, discount = 10) {
	return price - (price * discount) / 100
}
console.log(calculateDiscount(100, 20))
console.log(calculateDiscount(100))

const add = function (a, b) {
	return a + b
}
