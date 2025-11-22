function printName() {
    console.log('Егорджан');
}

printName();

function calculateSum() {
    let total = 0;
    for (let i = 1; i <= 100; i++) {
        total += i;
    }
    console.log(total);
}

calculateSum();

function calculateCube(number) {
    console.log(number ** 3);
}

calculateCube(3);

function checkNumberSign(value) {
    if (value > 0) {
        console.log('+++');
    } else if (value < 0) {
        console.log('---');
    }
}

checkNumberSign(5);
checkNumberSign(-3);

function calculateSumThree(a, b, c) {
    console.log(a + b + c);
}

calculateSumThree(1, 2, 3);

function calculateSumFromVariables(x, y, z) {
    console.log(x + y + z);
}

let variable1 = 1;
let variable2 = 2;
let variable3 = 3;

calculateSumFromVariables(variable1, variable2, variable3);

function calculateSquare(input = 5) {
    console.log(input * input);
}

calculateSquare(2);
calculateSquare(3);
calculateSquare();

function calculateSumWithDefaults(first = 0, second = 0) {
    console.log(first + second);
}

calculateSumWithDefaults(2, 3);
calculateSumWithDefaults(3);
calculateSumWithDefaults();

function calculateCubeReturn(value) {
    return value ** 3;
}

let cubeResult = calculateCubeReturn(3);
console.log(cubeResult);

function calculateSquareRoot(number) {
    return Math.sqrt(number);
}

let sqrtSum = calculateSquareRoot(3) + calculateSquareRoot(4);
console.log(sqrtSum);

function roundNumber(value) {
    return value.toFixed(3);
}

let roundedResult = roundNumber(calculateSquareRoot(2));
console.log(roundedResult);

function sumArray(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

let totalResult = sumArray([calculateSquareRoot(2), calculateSquareRoot(3), calculateSquareRoot(4)]);
console.log(totalResult);

let finalResult = roundNumber(sumArray([calculateSquareRoot(2), calculateSquareRoot(3), calculateSquareRoot(4)]));
console.log(finalResult);

function sumUpTo(limit) {
    let result = 0;
    for (let i = 1; i <= limit; i++) {
        result += i;
    }
    return result;
}

console.log(sumUpTo(5));

function countDivisionsUntil(number) {
    let counter = 0;
    while (number >= 10) {
        number /= 2;
        counter++;
    }
    return counter;
}

console.log(countDivisionsUntil(100));
console.log(countDivisionsUntil(8));
console.log(countDivisionsUntil(20));

function calculateResult(first, second) {
    if (first > 0 && second > 0) {
        return first * second;
    } else {
        return first - second;
    }
}

console.log(calculateResult(3, 4));

function checkAllEven(numbers) {
    for (let number of numbers) {
        if (number % 2 !== 0) {
            return false;
        }
    }
    return true;
}

console.log(checkAllEven([2, 4, 6]));
console.log(checkAllEven([2, 3, 4]));

function checkAllDigitsOdd(number) {
    let stringValue = String(Math.abs(number));
    for (let character of stringValue) {
        let digit = Number(character);
        if (digit % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log(checkAllDigitsOdd(135));
console.log(checkAllDigitsOdd(134));

function checkAdjacentDuplicates(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === numbers[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(checkAdjacentDuplicates([1, 2, 2, 3]));
console.log(checkAdjacentDuplicates([1, 2, 3, 4]));

function areEqual(a, b) {
    return a == b;
}

function areNotEqual(a, b) {
    return a != b;
}

function isSumGreaterOrEqual(a, b) {
    return a + b >= 10;
}

function isNonNegative(number) {
    return number >= 0;
}

function calculateAverage(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total / numbers.length;
}

function calculateArraySum(elements) {
    let result = 0;
    for (let element of elements) {
        result += element;
    }
    return result;
}

function calculateRatio(firstArray, secondArray) {
    let firstSum = calculateArraySum(firstArray);
    let secondSum = calculateArraySum(secondArray);
    return firstSum / secondSum;
}

function calculateProduct(elements) {
    let product = 1;
    for (let element of elements) {
        product *= element;
    }
    return product;
}

function getFirstNumber() {
    return 3;
}

function getSecondNumber() {
    return 5;
}

console.log(getFirstNumber() + getSecondNumber());

function sumElements(items) {
    let total = 0;
    for (let item of items) {
        total += item;
    }
    return total;
}

console.log(sumElements([1, 2, 3, 4, 5]));

let numbersArray = [1, 2, 3, 4, 5];

function processArray(items) {
    let total = 0;
    for (let item of items) {
        total += item;
    }
    console.log(total);
}

processArray(numbersArray);

console.log(getFirstNumber() + getSecondNumber());

let arraySum = sumElements([1, 2, 3, 4, 5]);
console.log(arraySum);

function sumArrayElements(items) {
    let total = 0;
    for (let item of items) {
        total += item;
    }
    return total;
}

function formatNumber(number) {
    if (number <= 9) {
        return '0' + number;
    } else {
        return String(number);
    }
}

let sampleArray = [1, 2, 3, 4, 5];
let arrayTotal = sumArrayElements(sampleArray);
console.log(arrayTotal);

function sumArrayItems(items) {
    let result = 0;
    for (let item of items) {
        result += item;
    }
    return result;
}

let testNumber = 12345;
let digitSumResult = getDigitsSum(testNumber);
console.log(digitSumResult);

function getDigitsSum(number) {
    let stringNumber = String(number);
    let sum = 0;
    for (let character of stringNumber) {
        sum += Number(character);
    }
    return sum;
}

console.log(checkPrime(13));

function checkPrime(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i < number; i += 2) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function findDivisors(number) {
    let divisorsList = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisorsList.push(i);
        }
    }
    return divisorsList;
}

console.log(findDivisors(12));

function findCommonDivisors(first, second) {
    let firstDivisors = findDivisors(first);
    let secondDivisors = new Set(findDivisors(second));
    return firstDivisors.filter(divisor => secondDivisors.has(divisor));
}

console.log(findCommonDivisors(12, 18));

function calculateDigitsSum(number) {
    return String(Math.abs(number))
        .split('')
        .reduce((total, digit) => total + Number(digit), 0);
}

console.log(calculateDigitsSum(123));

function getTodayName() {
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return dayNames[new Date().getDay()];
}

console.log(getTodayName());

function getDateDayName(date) {
    const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    return dayNames[date.getDay()];
}

console.log(getDateDayName(new Date('2025-11-12')));

function convertSecondsToDays(seconds) {
    return Math.floor(seconds / (60 * 60 * 24));
}

console.log(convertSecondsToDays(90000));

function checkLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(checkLeapYear(2024));
console.log(checkLeapYear(2025));

function isPrimeNumber(number) {
    if (number <= 1) return false;
    if (number === 2) return true;
    if (number % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log(isPrimeNumber(13));
console.log(isPrimeNumber(15));