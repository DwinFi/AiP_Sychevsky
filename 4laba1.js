"use strict"
alert('Я хочу кушать');
let ogo;

ogo = 10;
alert(ogo);

ogo = 20;
alert(ogo);

let math = 1 + 2 + 3;
alert(math);

let aa = 10;
let bb = 2;

alert(aa + bb);
alert(aa - bb);
alert(aa * bb);
alert(aa / bb);

let A = 1.5;
let B = 0.75;
let sum = A + B;
alert(sum);
let numA = -100;
alert(numA);
let numB = 25;
let oppositeNum = -numB;

alert(oppositeNum);

alert(2 ** 10);

let firstName = 'Егор';
let lastName = 'Сычевский';

alert(firstName);
alert(lastName);

let str = '!!!';
alert(str);

let part1 = 'java';
let part2 = 'script';
let result = part1 + part2;
alert(result);

let word1 = 'hello';
let word2 = 'world';
let greeting = word1 + ' ' + word2;
alert(greeting);

let text = 'Программирование';
alert(text.length);

let strr1 = 'xxx';
let strr2 = 'yyy';
let txt = `aaa ${str1} bbb ${str2} ccc`;

let mnogostrok = `a
b
c`;

let myVariable;
alert(myVariable);

let emptyValue = null;
alert(emptyValue);

let isTrue = true;
alert(isTrue); //true
let isFalse = false;
alert(isFalse); //false

let str1 = 'Hello';
let str2 = 'World';
let resultat = str1 * str2;

alert(result); //NaN

alert( 10 / 0); //Infinity
alert(-10 / 0); //-Infinity

// Задание №1
let Variable = "Привет, мир!";
console.log(Variable);

// Задание №2
let var1 = "JavaScript";
let var2 = 42;
let var3 = true;

console.log(var1);
console.log(var2);
console.log(var3);

const PI = 3.14;
let radius = 5;
let circumference = 2 * PI * radius;
alert(circumference);

let a = +'2';
let b = +'3';
alert(a + b);

let pixel1 = '5px';
let pixel2 = '6px';
let sumpx = parseInt(pixel1) + parseInt(pixel2);
alert(sumpx);

let pixel3 = '5.5px';
let pixel4 = '6.25px';
let sumpx2 = parseFloat(pixel3) + parseFloat(pixel4);
alert(sumpx2);

let pixel5 = '5.5px';
let pixel6 = '6.25px';
let sum3 = parseFloat(pixel5) + parseFloat(pixel6);
let respx = sum3 + 'px';
alert(respx);

let num3 = 15;
let num4 = 25;
alert(String(num3) + String(num4));

let numer = 12345;
let digitCount = String(numer).length;
alert(digitCount);

let num1 = 123;
let num2 = 4567;
let totalDigits = String(num1).length + String(num2).length;
alert(totalDigits);

let strok = 'abcde';
alert(strok[0]);
alert(strok[2]);
alert(strok[4]);

let reversed = strok[4] + strok[3] + strok[2] + str[1] + strok[0];
alert(reversed);

let nom = 2;
alert(str[nom]);

alert(strok[strok.length - 1]); //e
alert(strok[strok.length - 2]); //d
alert(strok[strok.length - 3]); //c

let strCHISLA = '12345';
let sumCHISLA = Number(strCHISLA[0]) + Number(strCHISLA[1]) + Number(strCHISLA[2]) + Number(strCHISLA[3]) + Number(strCHISLA[4]);
alert(sumCHISLA); //15

let nummm = 12345;
let strrr = String(num);

let summm = Number(str[0]) + Number(str[1]) + Number(str[2]) + Number(str[3]) + Number(str[4]);
alert(sum); //15


let revers = strrr[4] + strrr[3] + strrr[2] + strrr[1] + strrr[0];
alert(revers);// 54321

let num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

let numNew = 10;
numNew++;
numNew++;
numNew--;
alert(numNew);