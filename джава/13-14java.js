console.log("IIFE");
let functionResult = (function() {
    return '!';
});

console.log(functionResult());

(function() {
    return function() {
        return function() {
            console.log('!');
        };
    };
})()()();

(function(firstValue) {
    return function(secondValue) {
        console.log(firstValue + secondValue);
    };
})(1)(2);

(function(initialNum) {
    return function(middleNum) {
        return function(finalNum) {
            console.log(initialNum + middleNum + finalNum);
        };
    };
})(1)(2)(3);

console.log("Счетчик первый");

let counterFunction = (function() {
    let counterValue = 1;
    
    return function() {
        console.log(counterValue);
        counterValue++;
    };
})();

counterFunction();
counterFunction();
counterFunction();
counterFunction(); 
counterFunction(); 

console.log("Счетчик второй");

let cyclicCounterFunction = (function() {
    let currentCounter = 1;
    
    return function() {
        console.log(currentCounter);
        
        if (currentCounter === 5) {
            currentCounter = 1;
        } else {
            currentCounter++;
        }
    };
})();

cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();
cyclicCounterFunction();

console.log("Рекурсия");
function func(arr) {
    if (arr.length === 0) {
        return;
    }
    console.log(arr.shift());
    func(arr);
}
let arr1 = [1, 2, 3, 4, 5];
func([...arr1]); // передаем копию массива

function getSumOfSquares(arr) {
    let first = arr.shift();
    let square = first * first;

    if (arr.length !== 0) {
        square += getSumOfSquares(arr);
    }

    return square;
}
let arr2 = [1, 2, 3, 4, 5];
console.log(getSumOfSquares([...arr2])); //55 (1 + 4 + 9 + 16 + 25)

function printPrimitives(obj) {
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            printPrimitives(value);
        } else {
            console.log(value);
        }
    }
}
let obj1 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
printPrimitives(obj1);

function flatten(arr) {
    let result = [];
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            result = result.concat(flatten(elem));
        } else {
            result.push(elem);
        }
    }
    return result;
}
let arr3 = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
console.log(flatten(arr3)); // [1, 2, 7, 8, 3, 4, 5, 6, 7]

function sumPrimitives(obj) {
    let sum = 0;
    for (let key in obj) {
        let value = obj[key];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            sum += sumPrimitives(value);
        } else if (typeof value === 'number') {
            sum += value;
        }
    }
    return sum;
}
let obj2 = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
console.log(sumPrimitives(obj2)); // 45

function flattenToString(arr) {
    let result = '';
    for (let elem of arr) {
        if (Array.isArray(elem)) {
            result += flattenToString(elem);
        } else {
            result += elem;
        }
    }
    return result;
}
let arr4 = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
console.log(flattenToString(arr4)); // 'abcdefgjk'

function squareNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(squareNumbers(arr[i]));
        } else if (typeof arr[i] === 'number') {
            result.push(arr[i] * arr[i]);
        }
    }
    return result;
}
let arr5 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
console.log(squareNumbers(arr5)); // [1, [4, 49, 64], [9, 16], [25, [36, 49]]]