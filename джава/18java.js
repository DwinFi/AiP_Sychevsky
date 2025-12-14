console.log("18 блок"); 

let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, department, position, salary] = arr;

function func() {
	return ['John', 'Smit', 'development', 'programmer', 2000];
}

let arr1 = func();
let [name1, surname1, department1, position1, salary1] = arr1;

let arr2 = ['John', 'Smit', 'development', 'programmer', 2000];
let [,, department2, position2,] = arr2;

let arr3 = ['John', 'Smit', 'development', 'programmer', 2000];
let [name3, surname3,...info] = arr3;

let arr4 = ['John', 'Smit', 'development', 'programmer'];
let [name4, surname4, department4, position4 = 'trainee'] = arr4;

function func5() {
	return (new Date).getDate();
}
let arr5 = [2023, 10, 15];
let [year = func5(), month = func5(), day = func5()] = arr5;

let options = {
	color: 'red',
	width:  400,
	height: 500,
};
let {color: c, width: w, height: h} = options;

let options1 = {
	width:  400,
	height: 500,
};
let {color: c1 = 'red', width: w1, height: h1} = options1;

function func6([name1, surname1, department1, position1, salary1]) {
	console.log(name1, surname1, department1, position1, salary1);
}
func6(['John', 'Smit', 'development', 'programmer', 2000]);

function func7([name1, surname1,...info]) {
	console.log(name1, surname1, info);
}
func7(['John', 'Smit', 'development', 'programmer', 2000]);

function func8([name1, surname1, department1, position1 = 'junior']) {
	console.log(name1, surname1, department1, position1);
}
func8(['John', 'Smit', 'development']);

function func9(department1, [name1, surname1], [year, month, date]) {
	console.log(department1, name1, surname1, year, month, date);
}
func9('development', ['John', 'Smit'], [2018, 12, 31]);

function func10({color, width, height}) {
	console.log(color, width, height);
}
func10({color: 'red', width: 400, height: 500});

function func11({color = 'red', width, height}) {
	console.log(color, width, height);
}
func11({width: 400, height: 500});