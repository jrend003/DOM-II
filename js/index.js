// Your code goes here
const nav = document.getElementsByClassName('nav');
nav.addEventListener("mouseover", (event) =>{ event.target.style.color = "orange"});

const button=document.getElementsByClassName('btn');
button.addEventListener("click", (event) =>{console.log(button)});

const el = document.querySelector('div');
el.addEventListener('wheel', zoom);

const navDoubleClick= document.GetElementsByClassName('nav');
navDoubleClick.addEventListener ("dblclick, event") =>{console.log(navDoubleClick)};

const intro = document.getElementsByClassName('intro');
intro.addEventListener('focus', (event) => {
event.target.style.background = 'pink';    
});

const textContent = document.getElementsByClassName(text-content);
textContent.addEventListener('blur', (event) => {
 event.target.style.background = 'orange';    
});

const navItems = document.getElementsByClassName('nav');
(event) => { event.stopPropagation() };