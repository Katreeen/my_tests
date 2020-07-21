"use strict";

// function learnJS(lang, callback){
//       console.log(`я учу ${lang}`);
//       callback();
// }
// function done(){
//       console.log('я прошел этот урок');
// }

// learnJS('JavaScript', done);

const options = {
      name: 'test',
      width: 1024,
      height: 1024,
      colors: {
            border: 'black',
            bg: 'red'
      },
      makeTest: function(){
            console.log('Test');
      }
};
options.makeTest();
const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length);
// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter = 0;
// for(let key in options){
//       if(typeof(options[key])==='object'){
//             for(let i in options[key]){
//                   console.log(`свойство ${i} имеет значение ${options[key][i]}`);    
//             }
//       }else{
//             console.log(`свойство ${key} имеет значение ${options[key]}`);    
//       }
//       counter++;
// }
// console.log(counter);