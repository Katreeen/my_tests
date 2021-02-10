"use strict";

//типы данных

  let number = 4.6;
  console.log(4/0);
  console.log('string' * 9);

  let persone = "Alex";

  const bool = true;

  console.log(nothing);

  let und;
  console.log(und);

  const obj = {
    name: 'John',
    age: 25,
    isMarried: false
  };
  console.log(obj.age);
  console.log(obj['name']);

  let arr = ['plan.jpg', 'apple.png', 'name.jpg', 25, {}, []];
  console.log(arr[0]);




alert('Hello!');
let result = confirm('Are you here?');
console.log(result);
const answer = prompt("Вам есть 18?", "");
//const answer = +prompt("Вам есть 18?", "");
console.log(typeof(answer));

const answers = [];
answers[0] = prompt("Как ваше имя", "");
answers[1] = prompt("Как ваша фамилия", "");
answers[2] = prompt("Сколько вам лет", "");

document.write(answers);


//интерполяция

const category = 'toys';
//console.log('http://sire.com/' + category + '/' + '4');
console.log(`http://sire.com/${category}/5`);


let num = 40;
(num == 40) ? console.log('yes') : console.log('no');

switch(num){
  case 49:
    console.log("no");
    break;
  case 100:
    console.log("no no");
    break;
  default:
    console.log("sorry");
}

while(num <= 55){
  console.log(num);
  num++;
}

do{
  console.log(num);
  num++;
}
while(num <= 55);

for(let i = 1; i < 8; i++){
  if(num == 50){
    //break; //прерывание
    continue; //пропуск
  }
  console.log(num);
  num++;
}

let num = 20;
function showFirstMassage(text) {
  console.log(text);
  num = 10;
}
showFirstMassage("Hello World!");
console.log(num);

function calc(a, b) {
  return (a + b);
}
console.log(calc(8, 2));
console.log(calc(9, 6));

function ret() {
  let num = 50;
  return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log("Hello")
};
logger();

const calc = (a, b) =>{
  console.log(a + b);
} 

const str = "test";
const arr = [1,2,3]
//console.log(arr.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello World";
const baby = "Hello, my baby";
//console.log(logg.slice(6, 11));
console.log(baby.slice(7));
console.log(baby.substring(7));
console.log(baby.substr(7, 7));

const mnum = 12.2;
console.log(Math.round(mnum));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

function first() {
	setTimeout(function () {
		console.log('1');
	}, 500);
}

function second() {
	console.log('2');
}
first();
second();

function learnJS(lang, callback) {
	console.log(`Я учу: ${lang}`);
	callback();
}

function done() {
	console.log("Я прошел этот урок");
}
learnJS('JavaScript', done);

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red'
	},
	makeTest: function () {
		console.log('Test');
	}
};
options.makeTest();
const {
	border,
	bg
} = options.colors;
console.log(border);


console.log(options.name);
delete options.name;
console.log(options);

let counter = 0;
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]){
			console.log(`Свойство ${i} имеет свойство ${options[key][i]}`);
			counter++;
		}
	}else {
		console.log(`Свойство ${key} имеет свойство ${options[key]}`);
		counter++;
	}

}
console.log(counter);

console.log(Object.keys(options).length);

const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}
// arr[99] = 0;
// console.log(arr.length);
arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
	
})

arr.pop();
arr.push(10);

for (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

for (let value of arr) {
	console.log(value);
}
console.log(arr);

const str = prompt("", "");
const products = str.split(', ');
products.sort();
console.log(products.join(';'))

let a = 5,
	b = 5;
b = b + 5;
console.log(b);

const obj = {
	a: 5,
	b: 1
};
const copy = obj; //ссылка
copy.a = 10;
console.log(copy);
console.log(obj);

function copy(mainObj) {
	let objCopy = {};
	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
}
const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
	d: 17,
	i: 20
};
//console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = "ddddd0";
console.log(newArray);
console.log(oldArray);

const video = ['yt', 'vm', 'rt'],
	blogs = ['in', 'lj', 'bg'],
	internet = [...video, ...blogs, 'vk', 'fb'];
console.log(internet);

function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
const num = [2, 5, 7];

console.log(log(...num));

const array = ['a', 'b'];
const newAr = [...array];
const q = {
	one: 1,
	two: 2
};
const newObj = { ...q };
console.log(newObj);