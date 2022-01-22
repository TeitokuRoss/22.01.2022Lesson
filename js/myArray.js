"use strict";
//добавить значение
//увеличить длину
//вернуть новую длину
function MyArray() {
	this.length = 0;
	this.push = function (item) {};
}

const myArrayproto = {};

myArrayproto.push = function (item) {
	this[this.length++] = item;
	return this.length;
};
//убираем свойство
//уменьшить длину
//вернуть значение последнего символа
myArrayproto.pop = function (item) {
	const deletedElem = this[this.length - 1];
	delete this[this.length - 1];
	this.length--;
	return deletedElem;
};
myArrayproto.forEach = function (callback) {
	for (let i = 0; o < this.length; i++) {
		callback(this[i], i, this);
	}
};
const MyArr1 = new MyArray();
console.log(MyArr1);

MyArr1.push(1);
console.log(MyArr1);
MyArr1.push(2);
console.log(myArr1);
