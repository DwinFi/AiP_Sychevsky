(function() {
    let aarr = ['a', 'b', 'c', 'd', 'e'];
    for (let elem of aarr) {
        console.log(elem);
    }
    let obj = { x: 1, y: 2, z: 3 };
    for (let key in obj) {
        console.log(key);
    }
    for (let key in obj) {
        console.log(obj[key]);
    }
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }
    i = 100;
    while (i > 0) {
        console.log(i);
        i--;
    }
    i = 11;
    while (i <= 33) {
        console.log(i);
        i++;
    }
    let cnt = 0;
    let num = 1;
    while (num < 1000) {
        num = num * 3;
        cnt++;
    }
    console.log(num);
    console.log(cnt);
    for (i = 1; i <= 100; i++) {
        console.log(i);
    }
    for (i = 11; i <= 33; i++) {
        console.log(i);
    }
    for (i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    for (i = 1; i <= 99; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
    for (i = 100; i > 0; i--) {
        console.log(i);
    }
    let arr2 = ['a', 'b', 'c', 'd', 'e'];
    for (i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
    for (i = 1; i < arr2.length - 1; i++) {
        console.log(arr2[i]);
    }
    for (i = arr2.length - 1; i >= 0; i--) {
        console.log(arr2[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i]);
    }
    let arr3 = [2, 5, 9, 15, 1, 4];
    for (let elem of arr3) {
        if (elem > 3 && elem < 10) {
            console.log(elem);
        }
    }
    let obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    for (let key in obj2) {
        if (obj2[key] % 2 == 0) {
            console.log(obj2[key]);
        }
    }
    let res = 0;

    for (i = 2; i <= 100; i++) {
        if (i % 2 == 0) {
            res += i;
        }
    }

    console.log(res);
    res = 0;
    for (i = 1; i <= 99; i++) {
        if (i % 2 != 0) {
            res += i;
        }
    }

    console.log(res);
    res = 0;
    for (i = 1; i <= 20; i++) {
        let res1 = i * 3;
        res += res1;
    }

    console.log(res);

    let arr4 = [2, 5, 9, 3, 1, 4];
    res = 0;
    for (let elem of arr4) {
        res += elem;
    }
    console.log(res);

    let arr5 = [2, 5, 9, 3, 1, 4];
    res = 0;
    for (let elem of arr5) {
        if (elem % 2 == 0) {
            res += elem;
        }
    }
    console.log(res);

    let arr6 = [2, 5, 9, 3, 1, 4];
    res = 0;
    for (let elem of arr6) {
        res += elem ** 2;
    }
    console.log(res);

    let arr7 = [2, 5, 9, 3, 1, 4];
    res = 1;
    for (let elem of arr7) {
        res *= elem;
    }
    console.log(res);

    let str = '';

    for (i = 1; i <= 5; i++) {
        str += '-';
    }

    console.log(str);
    str = '';

    for (i = 1; i <= 9; i++) {
        str += i;
    }

    console.log(str);
    str = '';

    for (i = 9; i >= 1; i--) {
        str += i;
    }

    console.log(str);
    str = '';

    for (let i = 1; i <= 9; i++) {
        str += '-' + i;
    }

    console.log(str);
    let arr8 = [1, 2, 3, 4, 5];

    for (let elem of arr8) {
        console.log(elem);
    }

    let arr9 = [5, 8, 2, 0, 9, 4];
    i = 0;

    while (i < arr9.length && arr9[i] !== 0) {
        console.log(arr9[i]);
        i++;
    }

    let arr10 = [10, 5, 8, -3, 7, 2];
    let sum = 0;
    i = 0;

    while (i < arr10.length && arr10[i] >= 0) {
        sum += arr10[i];
        i++;
    }

    console.log("Сумма:", sum);

    let arr11 = [1, 5, 8, 3, 2, 3, 7];
    let position = -1;
    i = 0;

    while (i < arr11.length) {
        if (arr11[i] === 3) {
            position = i;
            break;
        }
        i++;
    }

    console.log("Позиция первой тройки:", position);

    sum = 0;
    let count = 0;
    let currentNumber = 1;

    while (sum <= 100) {
        sum += currentNumber;
        count++;
        currentNumber++;
    }

    console.log("Нужно сложить чисел:", count);
    console.log("Итоговая сумма:", sum);

    i = 1;

    while (i <= 100) {
        if (i % 2 !== 0) {
            i++;
            continue;
        }
        console.log(i);
        i++;
    }

    for (i = 1; i <= 9; i++) {
        for (let j = 1; j <= 3; j++) {
            console.log(i);
        }
    }

    let result = '';

    for (i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            result += i + '' + j + ' ';
        }
    }

    console.log(result);

    let arr12 = [];

    for (i = 1; i <= 10; i++) {
        arr12.push(i);
    }

    console.log(arr12);

    let arr13 = [];

    for (i = 1; i <= 10; i++) {
        arr13.push('x');
    }

    console.log(arr13);

    let arr14 = [];
    let sourceArr = [1, 2, 3, 4, -1];

    for (i = 0; i < sourceArr.length; i++) {
        if (sourceArr[i] > 0) {
            arr14.push(sourceArr[i]);
        }
    }

    console.log(arr14);

    let arr15 = [];
    sourceArr = [1, 2, 3, 4, -1];
    for (i = 0; i < sourceArr.length; i++) {
        let cube = sourceArr[i] ** 2;
        arr15.push(cube);
    }

    console.log(arr15);

    let arr16 = [];
    sourceArr = [1, 2, 3, 4, -1];
    for (i = 0; i < sourceArr.length; i++) {
        let cube = sourceArr[i] - 1;
        arr16.push(cube);
    }

    console.log(arr16);

    let arr17 = [];
    sourceArr = [1, 2, 3, 4, -1];
    for (i = 0; i < sourceArr.length; i++) {
        let cube = sourceArr[i] + 10;
        arr17.push(cube);
    }

    console.log(arr17);

    let obj3 = { x: 1, y: 2, z: 3 };

    for (let key in obj3) {
        obj3[key] = obj3[key] * obj3[key];
    }

    console.log(obj3);

    let obj4 = { x: 1, y: 2, z: 3 };

    for (let key in obj4) {
        obj4[key] = obj4[key] + 1;
    }

    console.log(obj4);

    let arr18 = ['a', 'b', 'c', 'd', 'e'];
    let found = false;

    for (i = 0; i < arr18.length; i++) {
        if (arr18[i] === 'c') {
            found = true;
            break;
        }
    }

    if (found) {
        console.log('+++');
    } else {
        console.log('---');
    }

    let arr19 = [10, 20, 30, 40, 21, 32, 51];
    let sum9 = 0;

    for (let i = 0; i < arr19.length; i++) {
        let firstDigit = String(arr19[i])[0];
        if (firstDigit === '1' || firstDigit === '2') {
            sum9 += arr19[i];
        }
    }

    console.log(sum9);
})();