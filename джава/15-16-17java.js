console.log("Перебирающие методы");

let numbersArray = [4, 9, 16, 25, 36];

let squaredRoots = numbersArray.map(function(number) {
    return Math.sqrt(number);
});

console.log(squaredRoots); // [2, 3, 4, 5, 6]

let wordsCollection = ["hello", "world", "javascript"];

let excitedWords = wordsCollection.map(function(word) {
    return word + '!';
});

console.log(excitedWords); // ["hello!", "world!", "javascript!"]

let stringList = ["abc", "def", "ghi"];

let reversedStrings = stringList.map(function(text) {
    return text.split('').reverse().join('');
});

console.log(reversedStrings); // ["cba", "fed", "ihg"]

let digitsStrings = ['123', '456', '789'];

let numbersMatrix = digitsStrings.map(function(numString) {
    return numString.split('').map(function(char) {
        return parseInt(char);
    });
});

console.log(numbersMatrix);


let valuesArrray = [10, 20, 30, 40, 50];

let multipliedByIndex = valuesArrray.map(function(value, position) {
    return value * position;
});

console.log(multipliedByIndex); // [0, 20, 60, 120, 200]

let numbersCollection = [1, 2, 3, 4, 5];
let squaresSum = 0;

numbersCollection.forEach(function(number) {
    squaresSum += number * number;
});

console.log(squaresSum); // 55

console.log('пупупу');
let numbersSet = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let positiveNumbers = numbersSet.filter(function(number) {
    return number > 0;
});

console.log(positiveNumbers); // [5, 1, 1, 3, 4]

let valuesArray = [-2, 5, 1, -5, -1, 1, 3, 4, -1];

let negativeValues = valuesArray.filter(function(value) {
    return value < 0;
});

console.log(negativeValues); // [-2, -5, -1, -1]

let dataCollection = [0, 5, 10, 15, -5, 3, 7, 12, 8];

let numbersInRange = dataCollection.filter(function(element) {
    return element > 0 && element < 10;
});

console.log(numbersInRange); // [5, 3, 7, 8]

let numberList = [10, 5, 8, 3, 12, 7];

let filteredNumbers = numberList.filter(function(number, index) {
    return number * index < 30;
});

console.log(filteredNumbers);

let numberssCollection = [1, 2, 3, 4, 5];

let allPositive = numberssCollection.every(function(number) {
    return number > 0;
});

console.log(allPositive); // true


let valuesArrayy = [1, 2, 3, 4, 5];

let productCheck = valuesArrayy.every(function(value, index) {
    return value * index < 30;
});

console.log(productCheck);


let nuumbersArray = [-3, -2, -1, 0, 4, -5];

let hasPositive = nuumbersArray.some(function(number) {
    return number > 0;
});

console.log(hasPositive);

let dataaCollection = [1, 2, 3, 4, 5, 10];

let hasLargeProduct = dataaCollection.some(function(element, index) {
    return element * index > 30;
});

console.log(hasLargeProduct); // true


console.log('Оператор spread')
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
let arr = [1, 2, 3, 4, 5];
let result = func(...arr);
console.log(result); // 15
let arr1 = [1, 2, 3, 4, 5];
let min = Math.min(...arr1);
console.log(min);

console.log('Оператор rest')
function average(...nums) {
    if (nums.length === 0) {
        return 0; // или можно вернуть null, undefined — по усмотрению
    }
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    return sum / nums.length;
}
console.log(average(1, 2, 3));       // 2
console.log(average(1, 2, 3, 4));    // 2.5
console.log(average(1, 2, 3, 4, 5)); // 3