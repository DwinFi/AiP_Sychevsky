let date = new Date(1);
console.log(date.getFullYear()); 
console.log(date.getMonth());    
console.log(date.getDate()); 

function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(
    addZero(date.getHours())+':'+
    addZero(date.getMinutes()) + ':'+
    addZero(date.getSeconds())+ ' ' +
    addZero(date.getFullYear()) + '-' + 
    addZero(date.getMonth() + 1) + '-' +
    addZero(date.getDate())
);

let str = '2025-12-31';
let res = str.split('-').reverse().join('.');
console.log(res);

let date1 = new Date();
console.log(date1.getDay());
if(date1.getDay() >= 1 && date1.getDay() <= 5){
    console.log('рабочий день');
}

let currentDay = date1.getDay();
let daysUntilSunday;
if (currentDay === 0) {
    daysUntilSunday = 0;
} else {
    daysUntilSunday = 7 - currentDay;
}
console.log(`Дней до ближайшего воскресенья: ${daysUntilSunday}`);

let monthValue = date.getMonth();
let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];
console.log(months[monthValue]);

let date2 = new Date(2025, 9, 26);
let dayOfWeek = date2.getDay(); // переименовано
let daysArr = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
console.log(daysArr[dayOfWeek]);

let date3 = new Date(2015, 1, 1);
console.log(date3.getTime());

let date5 = new Date(1988, 2, 1);   
let date6 = new Date(2000, 0, 10);  
let diffMs = date6.getTime() - date5.getTime();
let diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(`Количество дней между датами: ${Math.floor(diffDays)}`);

let birthDate = new Date(2006, 8, 26); 
let now = new Date();                   
let diffMs2 = now.getTime() - birthDate.getTime();
let diffMonths = diffMs2 / (1000 * 60 * 60 * 24 * 30.44);
console.log(`Количество месяцев с рождения: ${Math.floor(diffMonths)}`);

const date7 = new Date(2000, 8, 1); 
const date8 = new Date(2010, 1, 15); 
const diffMilliseconds = date8 - date7;
console.log(`Разница в миллисекундах: ${diffMilliseconds}`);

const diffDays1 = Math.floor(diffMilliseconds / (1000 * 60 * 60 * 24));
console.log(`Разница в днях: ${diffDays1}`);

const yearsDiff = date8.getFullYear() - date7.getFullYear();
const monthsDiff = date8.getMonth() - date7.getMonth();
const totalMonthsDiff = yearsDiff * 12 + monthsDiff;
console.log(`Разница в месяцах: ${totalMonthsDiff}`);

const diffYears = date8.getFullYear() - date7.getFullYear();
console.log(`Разница в годах: ${diffYears}`);

function getLastDayOfMonth(month, year) {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
}
console.log(getLastDayOfMonth(2, 2020));
console.log(getLastDayOfMonth(1, 2020));
console.log(getLastDayOfMonth(1, 2021)); 
console.log(getLastDayOfMonth(3, 2023)); 

function getLastDayWeekday(month, year) {
    const date = new Date(year, month + 1, 0);
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    return daysOfWeek[date.getDay()];
}
const lastDayWeekday = getLastDayWeekday(5, 2025);
console.log(`Последний день июня 2025 года: ${lastDayWeekday}`);

let date10 = new Date(2020, 2, 0); 
function vis(date) {
    if(date.getDate() == 29) {
        console.log('високосный');
    } else {
        console.log('не високосный');
    }
}
vis(date10);

let date11 = new Date(2025, 0, 32);
function cor1(dateObj){
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let dayValue = dateObj.getDate(); // переименовано
    let checkDate = new Date(year, month, dayValue);
    if (checkDate.getFullYear() == year && checkDate.getMonth() == month && checkDate.getDate() == dayValue) {
        console.log('корректна');
    } else {
        console.log('некорректна');
    }
}
cor1(date11);

let date12 = new Date(date.getFullYear(), 11, 31);
console.log(date12.getDay());

let date13 = new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());
console.log(date13.getDay());

let date14 = new Date(date.getFullYear()-1,11,31);
let date15 = new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());
let date16 = new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());
console.log(date14.getDay());
console.log(date15.getDay());
console.log(date16.getDay());

let date17 = new Date(date.getFullYear(),0, 1 );
let date18 = new Date(date.getFullYear(),9, 10 );
let date19 = new Date(date.getFullYear(),date.getMonth(),20 );
let date20 = new Date(date.getFullYear(),date.getMonth() + 1,10 );
let res1 = (date18 - date17) / (1000 * 60 * 60 * 24);
let res2 = (date19 - date20) / (1000 * 60 * 60 * 24);
console.log(res1);
console.log(res2);

let date21 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
let date22 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
let res3 = (date22 - date21) / (1000 * 60 * 60);
console.log(res3);

let count = 0;
const currentYear = new Date().getFullYear();

for (let year = 2000; year <= currentYear; year++) {
    const januaryFirst = new Date(year, 0, 1); // 0 - январь
    const dayOfWeek = januaryFirst.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
        count++;
    }
}
console.log(`С 2000 по ${currentYear} год 1 января попадало на выходные ${count} раз`);