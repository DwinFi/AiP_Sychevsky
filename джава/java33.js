'use strict';

/* 499 — два независимых модуля */
(function () {
  const div = document.querySelector('#div1');
  div.onclick = () => div.textContent = div.textContent ** 2;
})();

(function () {
  const div = document.querySelector('#div2');
  div.onclick = () => div.textContent = div.textContent ** 3;
})();


/* 500 — сумма инпутов */
(function () {
  const btn = document.querySelector('#btn500');
  const inputs = document.querySelectorAll('#i1, #i2, #i3');

  btn.onclick = () => {
    let sum = 0;
    inputs.forEach(i => sum += Number(i.value || 0));
    console.log(sum);
  };
})();


/* 501 — передача родителя */
(function (root) {
  const parent = document.querySelector(root);
  const btn = parent.querySelector('#btn');
  const res = parent.querySelector('#res');

  btn.onclick = () => {
    let sum = 0;
    parent.querySelectorAll('div').forEach(div => {
      if (!isNaN(div.textContent)) sum += +div.textContent;
    });
    res.textContent = sum;
  };
})('#parent501');


/* 502–503 — объект настроек + значения по умолчанию */
(function ({root, type = 'p', amount = 5}) {
  const parent = document.querySelector(root);
  for (let i = 1; i <= amount; i++) {
    const el = document.createElement(type);
    el.textContent = 'elem ' + i;
    parent.append(el);
  }
})({ root: '#parent503', amount: 3 });


/* 504 — экспорт переменных и функций */
(function () {
  let str = 'module string';

  function funcA() {
    alert(str);
  }
  function funcB() {
    alert('вторая функция');
  }

  window.funcA = funcA;
  window.funcB = funcB;
})();


/* 505 — экспорт объекта */
(function () {
  function func1() { alert('func1'); }
  function func2() { alert('func2'); }
  function func3() { alert('func3'); }

  window.module505 = { func1, func2, func3 };
})();


/* 506 — библиотека math */
(function () {
  function square(num) {
    return num ** 2;
  }
  function cube(num) {
    return num ** 3;
  }
  function avg(arr) {
    return sum(arr) / arr.length;
  }
  function digitsSum(num) {
    return sum(String(num).split(''));
  }

  function sum(arr) {
    return arr.reduce((a, b) => a + Number(b), 0);
  }

  window.math = { square, cube, avg, digitsSum };
})();
