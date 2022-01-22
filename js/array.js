"use sctrict";

// const arr = {
// 	0: { name: "notebook1" },
// 	1: { name: "notebook2" },
// };

// //Array

// // нумерация элементов начинается с нуля
// const arr1 = new Array();
// const arr2 = []; //синтаксический сахар

// const arr3 = [100, 200, 300];

// const arr4 = [4, 5, 9, 66, 7, 8, 9, 55, 44, 2, 669, 55];

// const sumOfArr4 = sum(arr4);

// function sum(arr) {
// 	let sum = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 	}

// 	return sum;
// }

// //получить массив, содержащий элементы 2-х массивов

// const a1 = [1, 5, 8];

// const a2 = [5, 7, 9];

// //const a3 = new Array();

// function concat(arr1, arr2) {
// 	for (let i = 0; i < arr2.length; i++) {
// 		arr1[arr1.length] = arr2[i];
// 	}

// 	return arr1;
// 	// arr1[arr1.length] = arr2[0];
// 	// arr1[arr1.length + 1] = arr2[1];
// 	// arr1[arr1.length + 2] = arr2[2];
// 	// arr1[arr1.length + 3] = arr2[3];
// }

// //a1.push(1, 5, 8, 5, 7, 9);
// //функция является объектом, но называется функция
// //добавление/удаление элементов массива

// //push - добавление в конец массива
// const arr5 = [1, 4, 7];

// arr5.push(10);
// console.log(arr5);

// //pop - возврат последнего + его удаление

// const item1 = arr5.pop();
// console.log(arr5);
// const item2 = arr5.pop();
// console.log(arr5);

// //unshift - добавление в начало масива

// arr5.unshift(1000);
// arr5.unshift(1, 2, 3);
// console.log(arr5);

// //shift - возврат нулевого элемента + его удаление

// const item3 = arr5.shift();
// console.log(arr5);

// //push

// const a5 = [1, 5, 8];
// const a6 = [5, 7, 9, 8];

// function concat(arr1, arr2) {
// 	for (let i = 0; i < arr2.length; i++) {
// 		arr1.push(arr2[i]);
// 	}
// 	return arr1;
// }

// const arr7 = [];

// for (let i = 0; i < 7; i++) {
// 	arr7.push(Number(prompt("Введите число")));
// }
// console.log(arr7);

//Методы масивов
// console.log(Array.from("q' w e, rty\\"));

// const a8 = [1, 2, 3];
// const a9 = [7, 8, 9, 10];

// const a10 = a8.concat(a9);
// const a11 = a9.concat(18);
// //из а8 скопировать 2, 3 (два последних элемента)
// console.log(a8.slice(1, 3));
// //console.log(a8.slice(1));

// console.log(a8.slice(-2));

// //из a9 элементы с инд 1,2
// a9.splice(1, 3);

// const pets = ["parrot", "cat", "dog"];

// //console.log(pets[i])

// const printPer = function (item, index, arr) {
// 	console.log(pet);
// };
// pets.forEach(printPet);

// //pets.forEach(function(pet){console.log(pet)})
// printPet(pets[0]);

// //filter

// const Numbers = [1, 2, 3, 4, 8, 6, 4];
// const isOdd = function () {
// 	return item % 2 == 0;
// };
// const odd = numbers.filter(isOdd);
// console.log(odd);

// const number = [-1, 2, 3, -4, 0, 8, 6, 5];

// const isNegative = function (item, index, arr) {
// 	return item >= 0;
// };
// const negativ = number.filter(isNegative);
// console.log(negativ);

// //map
// const numbers = [-1, 2, -3, 4, 5, -6, 7];

// const plus1 = function(i){
//     return i + 1;
// }

// const newNumbers = numbers.map(plus1);
// console.log(newNumbers);

//every => true / false
const numbers = [-1, 2, -3, 4, 5, -6, 7];
const isPositive = function (item) {
	return item > 0;
};
console.log(numbers.every(isPostive));

const users = [
	{ name: "Test", age: 22 },
	{ name: "Test2", age: 55 },
];
function isAdult(item) {
	return item.age >= 18;
}
console.log(users.every(isAdult));

//метод  some - проверяет условие хотя бы для одного

console.log(users.some(isAdult));
