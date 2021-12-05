'use strict';
const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const wrapper = document.querySelector('.wrapper');
const firstHeart = document.querySelector('.heart');

//box.style.backgroundColor = 'blue';
//box.style.width = '500px';
let currentWidth = 250;
box.style.cssText = `background-color: blue; width: ${currentWidth}px`;

btns[1].style.borderRadius = '100%';

for (let i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = 'cian';
}

hearts.forEach((item) => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div'); // создание элемента
div.classList.add('black'); //добавили класс black к элементу
document.body.append(div); // добавили созданный элемент в конец тега body
document.body.appendChild(div); // аналогично команде выше

document.querySelector('.wrapper').append(div); //добавили созданный элемент в конец класса wrapper
wrapper.prepend(div); //добавили созданный элемент в начало класса wrapper
hearts[0].before(div); // добавили созданный элемент перед hearts[0]
hearts[0].after(div); // добавили созданный элемент после hearts[0]

//circles[0].remove(); // удалит первый элемент circles

hearts[2].replaceWith(circles[0]); //заменяем hearts[2] на circles[0]

// div.innerHTML = '<h1>Hello, World!</h1>'; // добавили тег с текстом в созданный элемент
div.textContent = 'Hello!'; // добавили текст

div.insertAdjacentHTML('beforebegin', '<h2>ТЕГ Н2</h2>');
