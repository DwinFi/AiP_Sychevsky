'use strict';

// ===== 487 =====
function setText(selector, text) {
  const elem = document.querySelector(selector);
  if (elem) elem.textContent = text;
}

function setAttr(selector, attr, value) {
  const elem = document.querySelector(selector);
  if (elem) elem.setAttribute(attr, value);
}

document.getElementById('btn487').onclick = () => {
  setText('#elem1', 'text1');
  setText('#elem2', 'text2');
  setAttr('#elem1', 'style', 'color:red');
};


// ===== 488 =====
function setTextAll(selector, text) {
  document.querySelectorAll(selector).forEach(e => e.textContent = text);
}

function appendText(selector, text) {
  document.querySelectorAll(selector).forEach(e => e.textContent += text);
}

document.getElementById('btn488').onclick = () => {
  setTextAll('.elem488', 'hello');
  appendText('.elem488', '!');
};


// ===== 489 / 490 =====
function forEachElem(selector, callback) {
  const elems = document.querySelectorAll(selector);
  elems.forEach((elem, index) => callback(elem, index));
}

document.getElementById('btn489').onclick = () => {
  forEachElem('.elem489', elem => elem.textContent += '!');
};

document.getElementById('btn490').onclick = () => {
  forEachElem('.elem490', (elem, index) => {
    elem.textContent = index + ' ' + elem.textContent;
  });
};


// ===== 491 =====
function appendTextElem(elem, text) {
  elem.textContent += text;
}

function setValue(input, value) {
  input.value = value;
}

document.getElementById('btn491').onclick = () => {
  document.querySelectorAll('.elem491')
    .forEach(p => appendTextElem(p, '!'));

  setValue(document.getElementById('input491'), 'готово');
};


// ===== 492 =====
function appendElem(ul, text) {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

document.getElementById('btn492').onclick = () => {
  const arr = ['one', 'two', 'three'];
  const ul = document.getElementById('ul492');
  ul.innerHTML = '';
  arr.forEach(item => appendElem(ul, item));
};


// ===== 493 / 494 =====
function createTable(rows, cols) {
  const table = document.createElement('table');

  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.textContent = i + ',' + j;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  return table;
}

document.getElementById('btn493').onclick = () => {
  const wrap = document.getElementById('wrap493');
  wrap.innerHTML = '';
  const table = createTable(3, 4);
  table.style.color = 'red';
  wrap.appendChild(table);
};


// ===== 495 =====
function createTableByArr(arr) {
  const table = document.createElement('table');

  arr.forEach(row => {
    const tr = document.createElement('tr');
    row.forEach(cell => {
      const td = document.createElement('td');
      td.textContent = cell;
      tr.appendChild(td);
    });
    table.appendChild(tr);
  });

  return table;
}

document.getElementById('btn495').onclick = () => {
  const data = [[1,2,3],[4,5,6],[7,8,9]];
  const wrap = document.getElementById('wrap495');
  wrap.innerHTML = '';
  wrap.appendChild(createTableByArr(data));
};


// ===== 496 =====
document.getElementById('btn496').onclick = () => {
  (function () {
    let str = 'локальная переменная';
    alert(str);
  })();
};
