"use strict";

const num = 50;
//Тернарный оператор
(num==50) ? console.log('ok!') : console.log('error');

const uno = 50;

switch(uno){ //строгое соответствие
      case 49:
            console.log('Неверно');
            break;
      case 100:
            console.log('Неверно');
            break;
      case 50:
            console.log('Верно');
            break;
      default:
            console.log('Не в этот раз');
            break;
}