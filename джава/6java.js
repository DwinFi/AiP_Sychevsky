let arr80 = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l']
];
console.log(arr80[3][2]); 
console.log(arr80[1][1]); 
console.log(arr80[2][0]); 
console.log(arr80[0][0]); 

// Сумма элементов двумерного массива (через индексы)
let arr81 = [[1, 2], [3, 4], [5, 6]];
let sum81 = 0;
for (let i = 0; i < arr81.length; i++) {
  for (let j = 0; j < arr81[i].length; j++) {
    sum81 += arr81[i][j];
  }
}
console.log(sum81);

// Трёхмерный массив: сумма всех элементов
let arr82 = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

let sum82 = 0;
for (let i = 0; i < arr82.length; i++) {            
  for (let j = 0; j < arr82[i].length; j++) {      
    for (let k = 0; k < arr82[i][j].length; k++) {  
      sum82 += arr82[i][j][k];
    }
  }
}
console.log(sum82);

// Перебор через for-of
let arr83 = [[1, 2, 3], [4, 5], [6]];
let sum83 = 0;
for (let subArr of arr83) {
  for (let elem of subArr) {
    sum83 += elem;
  }
}
console.log(sum83);

let arr84 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum84 = 0;
for (let matrix of arr84) {
  for (let row of matrix) {
    for (let num of row) {
      sum84 += num;
    }
  }
}
console.log(sum84);

// Заполнение двумерного массива
let arr85 = [];
for (let i = 0; i < 3; i++) {
  arr85[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr85[i].push(j);
  }
}
console.log(arr85);

let arr86 = [];
for (let i = 0; i < 3; i++) {
  arr86[i] = [];
  for (let j = 0; j < 4; j++) {
    arr86[i].push('x');
  }
}
console.log(arr86);

// Заполнение трёхмерного массива
let arr87 = [];
for (let i = 0; i < 3; i++) {
  arr87[i] = [];
  for (let j = 0; j < 2; j++) {
    arr87[i][j] = [];
    for (let k = 1; k <= 5; k++) {
      arr87[i][j].push(k);
    }
  }
}
console.log(arr87);

// Исправление ошибок при заполнении (создание подмассивов)
let arr88 = [];
for (let i = 0; i < 3; i++) {
  arr88[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr88[i].push(j);
  }
}
console.log(arr88);

let arr89 = [];
for (let i = 0; i < 3; i++) {
  arr89[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr89[i].push(j);
  }
}
console.log(arr89);

let arr90 = [];
for (let i = 0; i < 3; i++) {
  arr90[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr90[i].push(j);
  }
}
console.log(arr90);

let arr91 = [];
for (let i = 0; i < 3; i++) {
  arr91[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr91[i].push(j);
  }
}
console.log(arr91);

let arr92 = [];
for (let i = 0; i < 3; i++) {
  arr92[i] = []; 
  for (let j = 1; j <= 5; j++) {
    arr92[i].push(j);
  }
}
console.log(arr92);

let arr93 = [];
for (let i = 0; i < 3; i++) {
  arr93[i] = [];
  for (let j = 1; j <= 5; j++) {
    arr93[i].push(j); 
  }
}
console.log(arr93);

// Заполнение по порядку
let arr94 = [];
let k94 = 1;
for (let i = 0; i < 4; i++) {
  arr94[i] = [];
  for (let j = 0; j < 2; j++) {
    arr94[i].push(k94++);
  }
}
console.log(arr94);

let arr95 = [];
let k95 = 2;
for (let i = 0; i < 4; i++) {
  arr95[i] = [];
  for (let j = 0; j < 3; j++) {
    arr95[i].push(k95);
    k95 += 2;
  }
}
console.log(arr95);

let arr96 = [];
let k96 = 1;
for (let i = 0; i < 2; i++) {
  arr96[i] = [];
  for (let j = 0; j < 2; j++) {
    arr96[i][j] = [];
    for (let m = 0; m < 2; m++) {
      arr96[i][j].push(k96++);
    }
  }
}
console.log(arr96);

// Исправление ошибок при заполнении по порядку
let arr97 = [];
let k97 = 1;
for (let i = 0; i < 3; i++) {
  arr97[i] = [];
  for (let j = 0; j < 3; j++) {
    arr97[i][j] = k97;
    k97++;
  }
}
console.log(arr97);

let arr98 = [];
let k98 = 1;
for (let i = 0; i < 3; i++) {
  arr98[i] = [];
  for (let j = 0; j < 3; j++) {
    arr98[i][j] = k98;
    k98++;
  }
}
console.log(arr98);

let arr99 = [];
let k99 = 1;
for (let i = 0; i < 3; i++) {
  arr99[i] = [];
  for (let j = 0; j < 3; j++) {
    arr99[i][j] = k99;
    k99++;
  }
}
console.log(arr99);

let arr100 = [];
let k100 = 1;
for (let i = 0; i < 3; i++) {
  arr100[i] = [];
  for (let j = 0; j < 3; j++) {
    arr100[i][j] = k100;
    k100++;
  }
}
console.log(arr100);

let arr101 = [];
let k101 = 1;
for (let i = 0; i < 3; i++) {
  arr101[i] = [];
  for (let j = 0; j < 3; j++) {
    arr101[i][j] = k101;
    k101++;
  }
}
console.log(arr101);

let arr102 = [];
for (let i = 0, k102 = 1; i < 3; i++) {
  arr102[i] = [];
  for (let j = 0; j < 3; j++) {
    arr102[i][j] = k102;
    k102++;
  }
}
console.log(arr102);

let arr103 = [];
for (let i = 0, k103 = 1; i < 3; i++) {
  arr103[i] = [];
  for (let j = 0; j < 3; j++) {
    arr103[i][j] = k103;
    k103++;
  }
}
console.log(arr103);

let arr104 = [];
for (let i = 0, k104 = 1; i < 3; i++) {
  arr104[i] = [];
  for (let j = 0; j < 3; j++) {
    arr104[i][j] = k104;
    k104++;
  }
}
console.log(arr104);

let arr105 = [];
for (let i = 0, k105 = 1; i < 3; i++) {
  arr105[i] = [];
  for (let j = 0; j < 3; j++) {
    arr105[i][j] = k105++;
  }
}
console.log(arr105);

let arr106 = [];
let k106 = 1;
for (let i = 0; i < 3; i++) {
  arr106[i] = [];
  for (let j = 0; j < 3; j++) {
    arr106[i][j] = k106;
    k106++;
  }
}
console.log(arr106);