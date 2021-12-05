'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const btns01 = document.getElementsByTagName('button')[1];
console.log(btns01);
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');

hearts.forEach((item) => {
    console.log(item);
});

const firstHeart = document.querySelector('.heart');
console.log(firstHeart);
const firstButton = document.querySelector('button');
console.log(firstButton);
