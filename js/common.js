"use strict";

const box = document.getElementById('box'),
	buttons = document.getElementsByTagName('button'),
	wrapper = document.querySelector('.wrapper'),
	circles = document.getElementsByClassName('circle'),
	hearts = wrapper.querySelectorAll('.heart');
	
// hearts.forEach(item => {
// 	console.log(item);
// });
//const oneHeart = document.querySelector('.heart')
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

buttons[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
// 	hearts[i].style.backgroundColor = 'blue';
// };

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('Тут бы я');
//document.querySelector('.wrapper').append(div);
div.classList.add('black');
wrapper.append(div);
div.innerHTML = "<h1>Hello, World</h1>";
//div.textContent = "Hello";

//div.insertAdjacentHTML('beforebegin', '<h2>Helli</h2>');
//div.insertAdjacentHTML('afterbegin', '<h2>Helli</h2>');
div.insertAdjacentHTML('beforerend', '<h2>Helli</h2>');
//div.insertAdjacentHTML('afterend', '<h2>Helli</h2>');
//wrapper.appendChild(div);
// wrapper.prepend(div);
//hearts[0].before(div);
//hearts[0].after(div);
//circles[0].remove();
hearts[0].replaceWith(circles[1]);