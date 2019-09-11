let css = document.querySelector('h3');
let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let body = document.querySelector('#gradient');
let button = document.querySelector('button');
console.log(button)
color1.value = '#3f87a6';
color2.value = '#f69d3c';
css.textContent = "linear-gradient( to right, RGB(41, 132, 172), RGB(246, 157, 60));"; 
const changeGradient = function () {

body.style.background = "linear-gradient( to right, " + color1.value + ", "  + color2.value + ")";
css.textContent = body.style.background + ";";
}

let randomize = function () {
   let gradient1 = '#' + Math.floor(Math.random() * 255);
   let gradient2 = '#' + Math.floor(Math.random() * 255);
   console.log(gradient1,gradient2);
   body.style.background = "linear-gradient( to right, " + gradient1 + ", "  + gradient2 + ")";
   css.textContent = body.style.background + ";";
}

color1.addEventListener('input', changeGradient);

color2.addEventListener('input', changeGradient);

button.addEventListener('click', randomize);
