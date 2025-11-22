function test1(func1, func2, func3) {
    return func1() + func2() + func3();
}

console.log('=== ЗАДАНИЕ 1 ===');
let result1 = test1(
    function() { return 1; },
    function() { return 2; },
    function() { return 3; }
);
console.log('Результат задания 1:', result1);

console.log('=== ЗАДАНИЕ 2 ===');
function funcA() { return 1; }
function funcB() { return 2; }
function funcC() { return 3; }

let result2 = test1(funcA, funcB, funcC);
console.log('Результат задания 2 (Function Declaration):', result2);

console.log('=== ЗАДАНИЕ 3 ===');
let funcAexp = function() { return 1; };
let funcBexp = function() { return 2; };
let funcCexp = function() { return 3; };

let result3 = test1(funcAexp, funcBexp, funcCexp);
console.log('Результат задания 3 (Function Expression):', result3);

console.log('=== ИТОГ ===');
console.log('Все задания выполнены успешно! Все результаты равны 6.');

// Параметры передаваемых функций
function test2(func) {
    console.log(func(3));
}

test2(function(num) {
    return num * num * num;
});

function funcD(num) {
    return num * num * num;
}

test2(funcD);

let funcE = function(num) {
    return num * num * num;
};

test2(funcE);

function test3(func) {
    console.log(func(2, 3));
}

test3(function(a, b) {
    return a + b;
});

// Передача числа параметром
function test4(num, func1, func2) {
    return func1(num) + func2(num);
}

let result4 = test4(3, 
    function(num) { return num * num; },
    function(num) { return num * num * num; }
);
console.log(result4);

// Применение передачи функции параметром
function test5(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }
    return arr;
}

let result5 = test5([1, 2, 3, 4, 5], function(num) {
    return num * num * num;
});
console.log(result5);

// Вложенные функции
function funcF(num1, num2) {
    function square(num) { return num * num; }
    function cube(num) { return num * num * num; }
    return square(num1) + cube(num2);
}
console.log(funcF(2, 3));

// Функция, возвращающая функцию
function funcG() { return function() { return 1; }; }
function funcH() { return function() { return 2; }; }
let sumResult = funcG()() + funcH()();
console.log(sumResult);

// Любой уровень вложенности
function funcI() {
    return function() {
        return function() {
            return function() {
                return function() {
                    return '!';
                };
            };
        };
    };
}
console.log(funcI()()()()());

// Параметры возвращаемой функции
function funcJ(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        };
    };
}
console.log(funcJ(2)(3)(4));

function funcK(num1) {
    let numbersArray = [num1];
    return function(num2) {
        numbersArray.push(num2);
        return function(num3) {
            numbersArray.push(num3);
            return function(num4) {
                numbersArray.push(num4);
                return function() { return numbersArray; };
            };
        };
    };
}
console.log(funcK(2)(3)(4)(5)());

// Реализация функции each
function each(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]));
    }
    return result;
}

function cubeFunc(num) { return num ** 3; }
let result6 = each([1, 2, 3, 4, 5], cubeFunc);
console.log(result6);

// Реализация функции filter
function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

let result7 = filter([1, 2, 3, 4, 5], elem => elem > 0);
console.log(result7);

function createCounter1() {
    let count = 1;
    return function() {
        console.log(count);
        count++;
    };
}

let counter1 = createCounter1();
counter1();
counter1();
counter1();

function createCounter2() {
    let count = 10;
    return function() {
        console.log(count);
        count--;
    };
}

let counter2 = createCounter2();
counter2();
counter2();
counter2();

function createCounter3() {
    let count = 10;
    return function() {
        if (count > 0) {
            console.log(count);
            count--;
        } else {
            console.log('Отсчет окончен');
        }
    };
}

let counter3 = createCounter3();
for (let i = 0; i < 12; i++) {
    counter3();
}