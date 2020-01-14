// Your code goes here

//mouseenter on header - turn the background #ca8a7e
const header = document.querySelector('header');
header.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = '#ca8a7e';
});

// mouseleave on header - turn the background back to white
header.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#ffffff';
});

// keydown - alert box
document.addEventListener('keydown', (event) => {
    alert('For help, please contact us using the form on the Contact page');
});

// wheel - scale that section
//refactor so that this only happens on the whole section, and goes back to normal on mouseleave

// const sections = document.querySelectorAll('section');

// sections.forEach(section => {
//     let scale = 1;
//     section.addEventListener('wheel', (event) => {
//         scale += event.deltaY * -0.01;
//         scale = Math.min(Math.max(.125, scale), 4);
//         event.target.style.transform = `scale(${scale})`;
//     });
// });

// dblclick on image - rotate
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('dblclick', (event) => {
        event.target.style.transform = 'rotate(5deg)';
    });
});

//dragend - alert
document.addEventListener('dragend', (event) => {
    alert('This page has no drag and drop elements.');
});

// load - welcome
window.addEventListener('load', (event) => {
    alert('Welcome!');
});

