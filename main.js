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
