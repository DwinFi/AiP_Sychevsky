alert('text');

let x;
let num = x;
x = 123;

let a = 1;
alert(a);

let b = x;
let z, c;
z = 1;
x = 2;
c = 3;

let s = 10;
alert(s);
s = 20;
alert(s);

let d = 1 + 2 + 3;
alert(d);
alert(a + z);
alert(a - z);
alert(a * z);
alert(a / z);

let result = a + z;
alert(result);
let result2 = a + z + 3;
alert(result2);

let g = 7;
let result3 = result2 + g;
alert(result3);

let k = 0.7;
let v = 1.5;
let result4 = k + v;
alert(result4);

let a1 = -1;
let a2 = 1;
alert(a1);
alert(-a2);
alert(g % v);
alert(2 ** 10);

let familya = 'mitryushin';
alert(familya);

let str = '!!!'
alert(str);

let java = 'script';
alert('java' + java);

let world = 'hello';
let hello = 'world';
alert(world + ' ' + hello);

alert('java'.length);

str = `a
b
c`;
alert(str);

let b1 = true;
let b2 = false;
alert(b1, b2);

alert(Number(java) * Number(hello));

alert(10 / 0, -10 / 0);

const PI = 3.14;

let R = 3;
alert(2 * PI * R);

let a_str = '10';
let b_str = '20';
alert(Number(a_str) + Number(b_str));

let a_num = '2';
let b_num = '3';
alert(+a_num + +b_num);

let num23 = parseInt('12px');
alert(num23);

let num33 = parseFloat('12.5px');
alert(num33);

let px1, px2, px3, px4, px5, px6;
px1 = 5;
px2 = 6;
px3 = 11.5;
px4 = 12.5;
px5 = 'px';
alert(px1 + px2, px3 + px4);

let res8;
res8 = px3 + px4 + px5;
alert(res8);

let num1222 = 1;
let num222 = 2;
alert(String(num1222) + String(num222));

let num876 = 1345;
alert(String(num876).length);

let num654 = 1235;
alert(String(num654).length);
alert(String(num876).length + String(num654).length);

let str111 = 'abcde';
alert(str111[0]);
alert(str111[2]);
alert(str111[4]);
alert(str111[4] + str111[3] + str111[2] + str111[1] + str111[0]);

let sssss = 3;
alert(str111[sssss]);

let str521 = 'abcde';
let last = str521.length - 1;
alert(str521[last]);
last = str521.length - 2;
alert(str521[last]);
last = str521.length - 3;
alert(str521[last]);

let test = '12345';
alert(Number(test[0]) + Number(test[1]) + Number(test[2]) + Number(test[3]) + Number(test[4]));
alert(Number(test[0]) * Number(test[1]) * Number(test[2]) * Number(test[3]) * Number(test[4]));
alert(test[4] + test[3] + test[2] + test[1] + test[0]);

num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
alert(num);

let name2 = prompt('Ваше имя?');
alert(name2);

let num22221 = prompt('Введите первое число');
let num22222 = prompt('Введите второе число');
alert(Number(num22221) + Number(num22222));

let P = prompt('Введите сторону квадрата');
alert(Number(P) * 4);
alert(Number(P) ** 2);

document.write('text');
document.write('<i>text</i>');

let str1463 = 'text';
document.write(str1463);
document.write('1<br>');
document.write('2<br>');
document.write('3<br>');

alert(60 * 60 * 60 * 24);
alert(60 * 60 * 60 * 24 * 30);
alert(60 * 60 * 60 * 24 * 30 * 12);
alert(60 * 60 * 24);
alert(60 * 60 * 24 * 30 * 12);

let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
alert(arr2[0], arr2[1]);
alert(arr2[0] + arr2[1] + arr2[2]);
alert(arr1[0] + '+' + arr1[1] + '+' + arr1[2]);

alert(arr1.length);
alert(arr1[arr1.length - 1]);

arr1[0] = 'c';
arr1[1] = 'b';
arr1[2] = 'a';

arr2[0] += 3;
alert(arr2);
arr2[1]++;
alert(arr2);

let arr3 = [];
arr3[0] = 1;
arr3[1] = 1;
arr3[3] = 1;
arr3[4] = 1;
arr3[5] = 1;

let arr4 = [];
arr4[3] = 'a';
arr4[8] = 'b';
alert(arr4.length);

arr3.push(2);
arr3.push(2);

let key, key2;
key = 0;
key2 = 1;
alert(arr2[key] + arr2[key2]);

let arr11 = ['a', 'b', 'c', 'd', 'e'];
delete arr11[0];
delete arr11[2];
alert(arr11.length);

let arr = [1, 2, 3, 4, 5];
alert(arr[arr.length - 1]);

arr = [1, 2, 3, 4, 5];
alert(arr[1] + arr[2] + arr[3] + arr[4] + arr[0]);

arr = [1, 2, 3, 4, 5];
alert(arr.length);

arr = [1, 2, 3, 4, 5];
alert(arr.length);