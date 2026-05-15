// script.js

function hello(){
    alert("Welcome to Joshua's Portfolio Website!");
}

function changeColor(){

    const colors = [
        "#440b45",
        "#1e3a8a",
        "#065f46",
        "#7c2d12",
        "#4a044e"
        
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}