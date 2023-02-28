// Завдання
// 1. Написати скрипт, який виводить по центру рядка HTML-сторінки фразу Hello world!!! червоним кольором. 
// Hello world!!!
// 2. Написати скрипт, який запитує в користувача його ім'я, улюблене число і вітається стільки разів, 
//яке число введене.
// 3. Вивести на екран "подарунок" користувачу у вигляді картинки, залежно від його віку та статі. Інформацію про користувача дізнатись за допомогою діалогових вікон confirm та prompt.

function Problem1(){
    document.write("<h1 class='title'>Hello world!!!</h1>");
}
function Problem2(){
    let name = prompt("what is your name?");
    let n = parseInt(prompt("what is your favourite number?"));
    for(let i = 0;i<n;i++){
        alert("Hello, " + name);
    } 
}
function Problem3(){
    let images = [
        "https://m.media-amazon.com/images/I/9123W73RAuL.jpg",
        "https://images.prom.ua/1342320056_w500_h500_konstruktor-lego-chima.jpg",
        "https://images.prom.ua/2745979538_cholovichi-godinniki-emporio.jpg",
        "https://watch.ua/images/detailed/77/900693_20200319_600_600_NY28292.jpg"
    ]
    let age = parseInt(prompt("How old are you?"));
    //check male/female by confirm
    let gender = confirm("if you are male -> click ok, if you are female -> click cancel");

    let img = document.createElement('img');
    img.style.width = "250px";
    img.style.height = "250px";
    if(age < 42 && gender){ 
        img.src = images[0];
    }else if(age < 42 && !gender){
        img.src = images[1];
    }else if(age >=42 && gender){
        img.src = images[2];
    }else{
        img.src = images[3];
    }
    document.getElementById('gift').appendChild(img);
}
//Problem1();
//Problem2();
//Problem3();