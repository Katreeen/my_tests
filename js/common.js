"use strict";

//передача по ссылке и по значению, Spread оператор

const obj = {
      a: 5,
      b: 1
};
// const  copy = obj; //ссылка!

// console.log(copy);
// console.log(obj);

//поверхностное клонирование
function copy(mainObj){
      let objCopy = {};

      let key;
      for(key in mainObj){
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
console.log(newNumbers); //копия
console.log(numbers); //основной


//соединить несколько обьектов через метод assign

const add = {
      d: 17,
      e: 20
};

console.log(Object.assign(numbers, add)); //куда помещаем, что помещаем
console.log(Object.assign({}, add));

const clone = Object.assign({}, add);
clone.d = 20;
console.log(add);
console.log(clone);

//копия массивы

const oldArray = ["a", "b", "c"];
const newArray = oldArray.slice();

newArray[1] = "fhjdhfjhhj";


console.log(newArray);
console.log(oldArray);


//spread оператор - оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c){
      console.log(a);
      console.log(b);
      console.log(c);      
}

const num = [2, 5, 7];

log(...num);

// создание поверхностной копии spread

const array = ["a", "b"];
const Aarray = [...array];

const q = {
      one: 1,
      two: 2
};
const newObj = {...q};
