"use strict"
let age = prompt('Сколько вам лет?');
alert('Ваш возраст: ' + age);

let num1 = +prompt('Введите первое число');
let num2 = +prompt('Введите второе число');
alert(num1 + num2); // сложит числа как числа

let side = +prompt('Введите сторону квадрата');
let area = side * side;
alert('Площадь квадрата: ' + area);

let sideA = +prompt('Введите первую сторону прямоугольника');
let sideB = +prompt('Введите вторую сторону прямоугольника');
let perimeter = 2 * (sideA + sideB);
alert('Периметр прямоугольника: ' + perimeter);

document.write('OKAK');

document.write('<i>Курсивный текст</i>');

let str = 'text';
document.write('<i>' + str + '</i>');

document.write('1<br>');
document.write('2<br>');
document.write('3<br>');
document.write('4<br>');
document.write('5<br>');

/*
let sec = 60 * 60;
let min = 60;
let bite = 1024 * 1024;

alert("В сутках: " + 24 * sec + "секунд");
alert("В 30 сутках: " + 30 * 24 * sec + "секунд");
alert("В году: " + 365 * 24 * sec + "секунд");
alert("В сутках: " + 24 * min + "минут");
alert("В году: " + 365 * 24 * min + "минут");
alert("В одном мегабайте: " + bite + "байт");
alert("В одном гигабайте: " + 1024 * bite + "байт");
alert("В десяти гигабайтах: " + 10 * 1024 *bite + "байт");
alert("В одном терабайте: " + 1024 * 1024 * bite + "байт");
alert("В одном терабайте: " + 1024 * bite + "килобайт");
*/

//  Площадь круга
let r = 5;
let sCircle = 3.14 * r * r;
alert("Площадь круга: " + sCircle);

//  Площадь квадрата
let a = 4;
let sSquare = a * a;
alert("Площадь квадрата: " + sSquare);

//  Площадь прямоугольника
let aRect = 3;
let bRect = 7;
let sRectangle = aRect * bRect;
alert("Площадь прямоугольника: " + sRectangle);

//  Периметр прямоугольника
let aPer = 5;
let bPer = 3;
let pRectangle = 2 * (aPer + bPer);
alert("Периметр прямоугольника: " + pRectangle);

//  Цельсий  Фаренгейт
let tc = 25;
let tf = (9 / 5) * tc + 32;
alert("25°C = " + tf + "°F");

// Фаренгейт  Цельсий
let tf2 = 77;
let tc2 = (5 / 9) * (tf2 - 32);
alert("77°F = " + tc2 + "°C");