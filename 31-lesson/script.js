const btn = document.querySelector('button');

const overlay = document.querySelector('.overlay');

/* btn.onclick = function () {
    alert('Click me!');
}; */

/* btn.addEventListener('click', () => {
    alert('First click!');
});

btn.addEventListener('click', () => {
    alert('Second click!');
});*/

// let i = 0;

const deleteElement = (event) => {
    console.log(event.target);
    console.log(event.type);
    /* i++;
    if (i == 4) {
        btn.removeEventListener('click', deleteElement);
    } */
};

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

/* btn.addEventListener('mouseenter', (event) => {
    //console.log('First click!');
    console.log(event);
    console.log(event.target);
    event.target.remove();
}); */

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event.target);
});

const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.addEventListener('click', deleteElement, { once: true });
});
