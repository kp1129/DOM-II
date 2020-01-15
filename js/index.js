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

//wheel - change background color
const colors = ['#ffffff', '#2e4045', '#83adb5', '#c7bbc9', '#5e3c58', '#bfb5b2', '#66545e', '#a39193', '#aa6f73', '#eea990', '#f6e0b5'];
let ix = 0;
const body = document.querySelector('body');
body.addEventListener('wheel', () => {
    let random = Math.floor(Math.random() * colors.length - 1);
    body.style.backgroundColor = colors[random];
});

// click - scale that section a bit
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.addEventListener('click', (event) => {
        event.target.style.transform = `scale(1.2)`;
    });
});



// dblclick on image - rotate
const images = document.querySelectorAll('img');
images.forEach(img => {
    let clicked = false;
    img.addEventListener('dblclick', (event) => {
        event.target.style.transition = 'transform 0.5s';
        if(!clicked) {        
            event.target.style.transform = 'rotate(5deg)';  
            clicked = true; 
        } else {
            event.target.style.transform = 'rotate(0deg)';
            clicked = false;
        }     
    });
});

//dragend - alert
document.addEventListener('dragend', () => {
    alert('This page has no drag and drop elements.');
});

// load - welcome
window.addEventListener('load', () => {
    alert('Welcome!');
});

// resize - hide header image
window.addEventListener('resize', () => {
    document.querySelector('.intro img').style.visibility = 'hidden';
});

//mousedown - change menu item styles
const navItems = document.querySelectorAll('.nav a');
navItems.forEach(item => {
    item.addEventListener('mousedown', (event) => {  
        event.stopPropagation();      
        event.target.style.color = '#00ff00';
        event.target.style.fontWeight = 'bold';
    });
});

// second mousedown to see event propagation irl
header.addEventListener('mousedown', (event) => {
    header.style.backgroundColor = 'black';
    header.style.color = 'red';
});

// preventDefault()
navItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();        
    })
});
