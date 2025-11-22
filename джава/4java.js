let test = 0;
if (test > 10) {
    alert('true');
}
else {
    alert('falfe');

}
if (test < 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test <= 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test >= 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test == 10) {
    alert('true');
}
else {
    alert('falfe');
}
if (test != 10) {
    alert('true');
}
else {
    alert('falfe');
}
let test1 = 10;
let test2 = 20;
if (test1 > test2) {
    alert('true');
}
else {
    alert('falfe');
}
if (test1 == test2) {
    alert('true');
}
else {
    alert('falfe');
}
let test3 = 'abc';
if (test3 == 'abc') {
    alert('true');
}
else {
    alert('falfe');
}
let test4 = '123';
let test5 = 123;
if (test4 == test5) {
    alert('true');
}
else {
    alert('falfe');
}
let num = 3;
let num1 = 2;
let num2 = 3;
if (num > 0 && num < 5) {
    alert('true');
}
else {
    alert('falfe');
} if (num >= 10 && num < 20) {
    alert('true');
}
else {
    alert('falfe');
} if (num1 <= 1 && num2 >= 3) {
    alert('true');
}
else {
    alert('falfe');
}
if (!(num > 0 && num < 5)) {
    alert('true');
}
else {
    alert('falfe');
}
test = true;
if (test === true) {
    alert('true');
}
else {
    alert('falfe');
}
if (test === false) {
    alert('true');
}
else {
    alert('falfe');
}
if (test) {
    alert('true');
}
else {
    alert('falfe');
}
test1 = true;
test2 = true;
test3 = true;
if (test1 && !(test2)) {
    alert('true');
}
else {
    alert('falfe');
}
if (test1 && test2) {
    alert('true');
}
else {
    alert('falfe');
} if (!(test1) && !(test2)) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 && test2) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 && test2 && test3) {
    alert('true');
}
else {
    alert('falfe');
} if (test1 || test2 && test3) {
    alert('true');
}
else {
    alert('falfe');
}
test = 10;
 if (test == 10) {
    alert('true');
}
if (test == 10) 
    alert('true');

else 
    alert('falfe');

if (test == 10)
    alert('true');
let day = 21;
if (day <= 10) {
    alert('1')
}
else if (day > 10 && day <= 20) {
    alert('2')
}
else if (day >= 21) {
    alert('3')
}
else if (day < 1 && day > 31) {
    alert('4')
}
let numValue = 33; // переименовано с num
if (numValue >= 10 && numValue <= 99) {
    let digit1 = Math.floor(numValue / 10); // исправлено деление
    let digit2 = numValue % 10;
    let sum = digit1 + digit2;
    if (sum <= 9) {
        alert(1)
    }
    else {
        alert(2)
    }
}
let lang = 'ru';
switch (lang) {
    case 'ru':
        alert('rus');
        break;
    case 'en':
        alert('eng');
        break;
}
let numResult = 1; // переименовано с num
let res = numResult >= 0 ? '1' : '2';

alert(res);
let a = 2 * (3 - 1);
let b = 6 - 2;
alert(a == b);
a = 5 * (7 - 4);
b = 1 + 2 + 7;
alert(a > b);
a = 2 ** 4;
b = 4 ** 2;
alert(a != b);
let age = prompt('skolko let'); // переименовано с ok и исправлено на prompt
if (age >= 18) {
    alert(18);
}
else {
    alert(false);
}
let min = 10;

if (min >= 0 && min <= 19) {
    alert('1 четверть');
}

if (min >= 20 && min <= 39) {
    alert('2 четверть');
}

if (min >= 40 && min <= 60) {
    alert('3 четверть');
}
let str = '12345';

if (str.length == 3) {
    alert('!');
}
let str2 = "apple"; // переименовано с str

if (str2.startsWith('a')) {
    console.log("Строка начинается на символ 'a'");
} else {
    console.log("Строка не начинается на символ 'a'");
}
let str3 = "index"; // переименовано с str

if (str3.endsWith('x')) {
    console.log("Строка заканчивается на символ 'x'");
} else {
    console.log("Строка не заканчивается на символ 'x'");
}
let str4 = "banana"; // переименовано с str

if (str4.startsWith('a') || str4.startsWith('b')) {
    console.log("Строка начинается на символ 'a' или 'b'");
} else {
    console.log("Строка не начинается ни на 'a', ни на 'b'");
}
let number = 150; 

if (number % 10 === 0) {
    console.log("Последняя цифра числа равна нулю");
} else {
    console.log("Последняя цифра числа не равна нулю");
}
let numCheck = 27; // переименовано с num

if (numCheck % 2 === 0) {
    console.log("Число четное");
} else {
    console.log("Число нечетное");
}
let numberDiv = 9; // переименовано с number

if (numberDiv % 3 === 0) {
    console.log(`Число ${numberDiv} делится на 3`);
} else {
    console.log(`Число ${numberDiv} НЕ делится на 3`);
}
let month = 5; // переименовано с month

if (month >= 3 && month <= 5) {
    console.log("Весна");
} else if (month >= 6 && month <= 8) {
    console.log("Лето");
} else if (month >= 9 && month <= 11) {
    console.log("Осень");
} else {
    console.log("Зима");
}
let str5 = 'abcde'; // переименовано с str

if (str5.startsWith('a')) {
    console.log("Первый символ - буква 'a'");
} else {
    console.log("Первый символ - не буква 'a'");
}
let numberFirst = 12345; // переименовано с number

let firstDigit = numberFirst.toString()[0];

if (firstDigit === '1' || firstDigit === '2' || firstDigit === '3') {
    console.log("Первая цифра - 1, 2 или 3");
} else {
    console.log("Первая цифра - не 1, 2 или 3");
}
let numberSum = 123; // переименовано с number

let digit1Sum = Math.floor(numberSum / 100);     
let digit2Sum = Math.floor((numberSum % 100) / 10);
let digit3Sum = numberSum % 10;                    

let totalSum = digit1Sum + digit2Sum + digit3Sum; // переименовано с sum
console.log(`Сумма цифр числа ${numberSum} равна ${totalSum}`);

let numberTicket = 123321; // переименовано с number
let strTicket = numberTicket.toString(); // переименовано с str
if (strTicket.length !== 6) {
    console.log("Число должно состоять из 6 цифр");
} else {
    let firstHalf = parseInt(strTicket[0]) + parseInt(strTicket[1]) + parseInt(strTicket[2]);
    let secondHalf = parseInt(strTicket[3]) + parseInt(strTicket[4]) + parseInt(strTicket[5]);

    if (firstHalf === secondHalf) {
        console.log("true");
    } else {
        console.log("Суммы не равны");
    }
}