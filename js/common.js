"use strict";

const arr = [1, 2, 3, 6, 8];
arr.sort();

const str = prompt('', '');
const products = str.split(', ');
console.log(products.join('; '));

// arr.forEach(function(item, i, arr){
//       console.log(`${i}:${item} внутри массива ${arr}`)
// })

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

//arr.pop(); //удалить последний элемент
//arr.push(10); //добавить последним элементом

// for(let i = 0; i < arr.length; i++){
//       console.log(arr[i]);
// }

// for(let value of arr){
//       console.log(value);
// }