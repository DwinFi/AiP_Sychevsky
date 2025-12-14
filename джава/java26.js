// Базовые элементы
let select = document.querySelector('#select');
let text = document.querySelector('#text');
let button = document.querySelector('#button');

if (button && select && text) {
  button.addEventListener('click', function() {
    text.textContent = select.value;
  });
}

// Заполнение годов
let yearSelect = document.querySelector('#yearSelect');
let result = document.querySelector('#result');

if (yearSelect) {
  for (let year = 2020; year <= 2030; year++) {
    let option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  yearSelect.addEventListener('change', function() {
    let year = parseInt(this.value, 10);
    if (isNaN(year)) {
      result.textContent = '';
      return;
    }
    if (isLeapYear(year)) {
      result.textContent = `${year} год - високосный`;
    } else {
      result.textContent = `${year} год - не високосный`;
    }
  });
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Выбор рабочего/выходного дня
let daySelect = document.querySelector('#daySelect');
let dayResult = document.querySelector('#dayResult');

if (daySelect && dayResult) {
  daySelect.addEventListener('change', function() {
    let dayNumber = parseInt(this.value, 10);
    if (!isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 5) {
      dayResult.textContent = 'Рабочий день';
    } else {
      dayResult.textContent = 'Выходной день';
    }
  });
}

// Установка текущего месяца
let monthSelect = document.querySelector('#monthSelect');
if (monthSelect) {
  let currentMonth = new Date().getMonth() + 1;
  // Проверяем, что опция с таким value существует
  let opt = Array.from(monthSelect.options).find(o => o.value === String(currentMonth));
  if (opt) monthSelect.value = String(currentMonth);
}

// numberInput -> select1 (0-based)
let numberInput = document.querySelector('#numberInput');
let select1 = document.querySelector('#select1');

if (numberInput && select1) {
  numberInput.addEventListener('blur', function() {
    let index = parseInt(this.value, 10);
    if (!isNaN(index) && index >= 0 && index < select1.options.length) {
      select1.selectedIndex = index;
    }
  });
}

// Установка текущего дня в daySelect2 (1..7)
let daySelect2 = document.querySelector('#daySelect2');
if (daySelect2) {
  let currentDay = new Date().getDay(); // 0..6 (0 = воскресенье)
  let dayNumber = currentDay === 0 ? 7 : currentDay;
  // Устанавливаем значение, если есть опция
  let opt2 = Array.from(daySelect2.options).find(o => o.value === String(dayNumber));
  if (opt2) daySelect2.value = String(dayNumber);
}

// Добавляем в текст опций select2 их value
let select2 = document.querySelector('#select2');
if (select2) {
  for (let i = 0; i < select2.options.length; i++) {
    let option = select2.options[i];
    option.textContent += ` [${option.value}]`;
  }
}

// Пометка select3: добавить '!' для выбранной, '?' для остальных
let select3 = document.querySelector('#select3');
if (select3) {
  for (let i = 0; i < select3.options.length; i++) {
    let option = select3.options[i];
    if (option.selected) {
      option.textContent += '!';
    } else {
      option.textContent += '?';
    }
  }
}

// lastButton -> выбрать последний option в select4
let select4 = document.querySelector('#select4');
let lastButton = document.querySelector('#lastButton');
if (select4 && lastButton) {
  lastButton.addEventListener('click', function() {
    let lastIndex = select4.options.length - 1;
    if (lastIndex >= 0) select4.selectedIndex = lastIndex;
  });
}

// showButton -> показать текст выбранной опции в select5
let select5 = document.querySelector('#select5');
let showButton = document.querySelector('#showButton');
let selectedText = document.querySelector('#selectedText');
if (select5 && showButton && selectedText) {
  showButton.addEventListener('click', function() {
    let selectedOption = select5.options[select5.selectedIndex];
    if (selectedOption) selectedText.textContent = selectedOption.textContent;
  });
}

// addButton -> добавить '!' к выбранной опции select6
let select6 = document.querySelector('#select6');
let addButton = document.querySelector('#addButton');
if (select6 && addButton) {
  addButton.addEventListener('click', function() {
    let selectedOption = select6.options[select6.selectedIndex];
    if (selectedOption) selectedOption.textContent += '!';
  });
}
