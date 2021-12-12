// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) => {
        event.preventDefault();
        console.log('Event Start!');
        console.log(event.touches);
        console.log(event.targetTouches);
        console.log(event.changedTouches);
    });

    box.addEventListener('touchmove', (event) => {
        event.preventDefault();
        console.log('Event Move!');
        console.log(event.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (event) => {
        event.preventDefault();
        console.log('Event End!');
    });
});
