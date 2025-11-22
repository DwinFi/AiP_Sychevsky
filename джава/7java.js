// Math
console.log(Math.pow(2, 10));
console.log(Math.sqrt(245));

let arr109 = [4, 2, 5, 19, 13, 0, 10];
let sumCubes = 0;
for (let i = 0; i < arr109.length; i++) {
  sumCubes += Math.pow(arr109[i], 3);
}
console.log(Math.sqrt(sumCubes));

let root110 = Math.sqrt(379);
console.log(Math.round(root110));        
console.log(root110.toFixed(1));         
console.log(root110.toFixed(2));         

let root111 = Math.sqrt(587);
let result111 = {
  floor: Math.floor(root111),
  ceil: Math.ceil(root111)
};
console.log(result111);

let numbers = [4, -2, 5, 19, -130, 0, 10];
let min112 = Math.min(...numbers);
let max112 = Math.max(...numbers);
console.log('Минимальное:', min112);
console.log('Максимальное:', max112);

let randomInt = Math.floor(Math.random() * 100) + 1;
console.log(randomInt);

let arr114 = [];
for (let i = 0; i < 10; i++) {
  arr114.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arr114);

console.log(Math.abs(7 - (-3)));

// String
console.log('js'.toUpperCase());
console.log('JS'.toLowerCase());