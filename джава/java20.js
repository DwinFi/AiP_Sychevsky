// === БАЗОВЫЕ ЗАДАЧИ ===

// 1. Получение элементов по ID
let elem1 = document.querySelector('#base_elem1');
let elem2 = document.querySelector('#base_elem2');
let elem3 = document.querySelector('#base_elem3');
console.log('Элементы по ID:', elem1, elem2, elem3);

// 2. Получение элемента внутри div#block
elem1 = document.querySelector('#block p');
console.log('Первый параграф внутри #block:', elem1);

// 3. Получение элемента внутри div.block
elem1 = document.querySelector('.block p');
console.log('Первый параграф внутри .block:', elem1);

// 4. Попытка получить .www p (ошибка - .www не содержит p)
elem1 = document.querySelector('.www p');
console.log('Попытка получить .www p:', elem1);

// 5. Обработчики кликов для базовых кнопок
document.querySelector('#base_button1').addEventListener('click', function(){
    console.log('Кнопка 1 нажата');
});

document.querySelector('#base_button2').addEventListener('click', function(){
    console.log('Кнопка 2 нажата');
});

document.querySelector('#base_button3').addEventListener('click', function(){
    console.log('Кнопка 3 нажата');
});

// === ЗАДАЧИ ГРУППЫ 1 ===

// 1.1 Прочитать текст абзаца
document.getElementById('task1_1_button').addEventListener('click', function() {
    const text = document.getElementById('task1_1_elem').textContent;
    console.log('Текст абзаца 1.1:', text);
    alert(`Текст абзаца: ${text}`);
});

// 1.2 Изменить текст абзаца
document.getElementById('task1_2_button').addEventListener('click', function() {
    document.getElementById('task1_2_elem').textContent = 'Новый текст абзаца!';
});

// 1.3 Вычислить сумму чисел
document.getElementById('task1_3_button').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('task1_3_num1').textContent);
    const num2 = parseInt(document.getElementById('task1_3_num2').textContent);
    const sum = num1 + num2;
    document.getElementById('task1_3_result').textContent = `Сумма: ${sum}`;
});

// 1.4 Сумма трех чисел в div
document.getElementById('task1_4_button').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('task1_4_num1').textContent);
    const num2 = parseInt(document.getElementById('task1_4_num2').textContent);
    const num3 = parseInt(document.getElementById('task1_4_num3').textContent);
    const sum = num1 + num2 + num3;
    document.getElementById('task1_4_sumDiv').textContent = `Сумма трех чисел: ${sum}`;
});

// 1.5 Увеличить счетчик на 1
document.getElementById('task1_5_button').addEventListener('click', function() {
    const counterElem = document.getElementById('task1_5_counter');
    let currentValue = parseInt(counterElem.textContent);
    currentValue++;
    counterElem.textContent = currentValue;
});

// 1.6 Добавить восклицательный знак
document.getElementById('task1_6_button').addEventListener('click', function() {
    const textElem = document.getElementById('task1_6_text');
    textElem.textContent += '!';
});

// === ЗАДАЧИ ГРУППЫ 2 (Атрибуты) ===

// 2.1 Показать атрибут type инпута
document.getElementById('task2_1_button').addEventListener('click', function() {
    const input = document.getElementById('task2_1_elem');
    const typeValue = input.getAttribute('type');
    document.getElementById('task2_1_result').textContent = `Атрибут type: ${typeValue}`;
});

// 2.2 Изменить type на submit
document.getElementById('task2_2_button').addEventListener('click', function() {
    const input = document.getElementById('task2_2_elem');
    input.setAttribute('type', 'submit');
    input.value = 'Отправить';
});

// 2.3 Показать href ссылки
document.getElementById('task2_3_button').addEventListener('click', function() {
    const link = document.getElementById('task2_3_link');
    const hrefValue = link.getAttribute('href');
    document.getElementById('task2_3_result').textContent = `Адрес ссылки: ${hrefValue}`;
});

// 2.4 Добавить адрес к тексту ссылки
document.getElementById('task2_4_button').addEventListener('click', function() {
    const link = document.getElementById('task2_4_link');
    const hrefValue = link.getAttribute('href');
    const currentText = link.textContent;
    link.textContent = `${currentText} (${hrefValue})`;
});

// 2.5 Показать путь к картинке
document.getElementById('task2_5_button').addEventListener('click', function() {
    const img = document.getElementById('task2_5_img');
    const srcValue = img.getAttribute('src');
    document.getElementById('task2_5_result').textContent = `Путь к картинке: ${srcValue}`;
});

// 2.6 Установить ширину картинки в 300px
document.getElementById('task2_6_button').addEventListener('click', function() {
    const img = document.getElementById('task2_6_img');
    img.setAttribute('width', '300');
});

// 2.7 Удвоить ширину картинки
document.getElementById('task2_7_button').addEventListener('click', function() {
    const img = document.getElementById('task2_7_img');
    const currentWidth = parseInt(img.getAttribute('width'));
    img.setAttribute('width', (currentWidth * 2).toString());
});

// 2.8 Переключение картинок
document.getElementById('task2_8_button1').addEventListener('click', function() {
    const img = document.getElementById('task2_8_img');
    img.setAttribute('src', 'https://via.placeholder.com/200/ff0000');
    img.setAttribute('alt', 'Красная картинка');
});

document.getElementById('task2_8_button2').addEventListener('click', function() {
    const img = document.getElementById('task2_8_img');
    img.setAttribute('src', 'https://via.placeholder.com/200/0000ff');
    img.setAttribute('alt', 'Синяя картинка');
});

// === ЗАДАЧИ ГРУППЫ 3 (Работа с формами) ===

// 3.1 Записать текст в инпут
document.getElementById('task3_1_button').addEventListener('click', function() {
    const input = document.getElementById('task3_1_input');
    input.value = 'Новый текст, записанный через JavaScript!';
});

// 3.2 Текст из инпута в абзац
document.getElementById('task3_2_button').addEventListener('click', function() {
    const input = document.getElementById('task3_2_input');
    const result = document.getElementById('task3_2_result');
    result.textContent = input.value || 'Вы не ввели текст!';
});

// 3.3 Квадрат числа
document.getElementById('task3_3_button').addEventListener('click', function() {
    const input1 = document.getElementById('task3_3_input1');
    const input2 = document.getElementById('task3_3_input2');
    const number = parseFloat(input1.value);
    
    if (!isNaN(number)) {
        input2.value = number * number;
    } else {
        input2.value = 'Ошибка: введите число';
    }
});

// 3.4 Поменять значения местами
document.getElementById('task3_4_button').addEventListener('click', function() {
    const input1 = document.getElementById('task3_4_input1');
    const input2 = document.getElementById('task3_4_input2');
    
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
});

// 3.5 Среднее арифметическое
document.getElementById('task3_5_button').addEventListener('click', function() {
    const inputs = [
        document.getElementById('task3_5_input1'),
        document.getElementById('task3_5_input2'),
        document.getElementById('task3_5_input3'),
        document.getElementById('task3_5_input4'),
        document.getElementById('task3_5_input5')
    ];
    
    let sum = 0;
    let count = 0;
    
    for (let i = 0; i < inputs.length; i++) {
        const value = parseFloat(inputs[i].value);
        if (!isNaN(value)) {
            sum += value;
            count++;
        }
    }
    
    const result = document.getElementById('task3_5_result');
    
    if (count > 0) {
        const average = sum / count;
        result.textContent = `Среднее арифметическое: ${average.toFixed(2)}`;
    } else {
        result.textContent = 'Пожалуйста, введите хотя бы одно число';
    }
});

// === ЗАДАЧИ ГРУППЫ 4 (События фокуса) ===

// 4.1 Фокус инпута
document.getElementById('task4_1_input').addEventListener('focus', function() {
    this.value = '1';
});
document.getElementById('task4_1_input').addEventListener('blur', function() {
    this.value = '2';
});

// 4.2 Квадрат числа при потере фокуса
document.getElementById('task4_2_input').addEventListener('blur', function() {
    const num = parseFloat(this.value);
    if (!isNaN(num)) {
        document.getElementById('task4_2_result').textContent = `Квадрат: ${num * num}`;
    }
});

// 4.3 Очистка при фокусе
document.getElementById('task4_3_input').addEventListener('focus', function() {
    this.value = '';
});

// === ЗАДАЧИ ГРУППЫ 5 (Классы) ===

// 5.1 Прочитать атрибут class
document.getElementById('task5_1_button').addEventListener('click', function() {
    const className = document.getElementById('task5_1_elem').getAttribute('class');
    document.getElementById('task5_1_result').textContent = `Class: ${className}`;
});

// 5.2 Установить class
document.getElementById('task5_2_button').addEventListener('click', function() {
    document.getElementById('task5_2_elem').setAttribute('class', 'new-class');
    document.getElementById('task5_2_elem').textContent = 'Класс установлен!';
});

// 5.3 Получить массив классов
document.getElementById('task5_3_button').addEventListener('click', function() {
    const classes = document.getElementById('task5_3_elem').getAttribute('class').split(' ');
    document.getElementById('task5_3_result').textContent = `Классы: [${classes.join(', ')}]`;
});

// === ЗАДАЧИ ГРУППЫ 6 (This и цепочки) ===

// 6.1 Картинка (вывод src в консоль)
console.log('6.1: Путь к картинке:', document.querySelector('#task6_1_image').src);

// 6.2 Фокус с this
document.getElementById('task6_2_input').addEventListener('focus', function() {
    this.value = '1';
});
document.getElementById('task6_2_input').addEventListener('blur', function() {
    this.value = '2';
});

// 6.3 Увеличение значения кнопки
document.getElementById('task6_3_button').addEventListener('click', function() {
    this.textContent = parseInt(this.textContent) + 1;
});

// === ЗАДАЧИ ГРУППЫ 7 (Работа с группами элементов) ===

// 7.1 Восклицательный знак для всех абзацев
document.querySelectorAll('.task7_1_p').forEach(p => {
    p.addEventListener('click', function() {
        this.textContent += '!';
    });
});

// 7.2 Квадрат числа в инпутах при потере фокуса
document.querySelectorAll('.task7_2_input').forEach(input => {
    input.addEventListener('blur', function() {
        const num = parseFloat(this.value);
        if (!isNaN(num)) {
            this.value = num * num;
        }
    });
});

// === ЗАДАЧИ ГРУППЫ 8 (Массовые операции) ===

// 8.1 Установить текст 'text' для всех абзацев
document.getElementById('task8_1_button').addEventListener('click', function() {
    document.querySelectorAll('.task8_1_p').forEach(p => {
        p.textContent = 'text';
    });
});

// 8.2 Нумерация абзацев
document.getElementById('task8_2_button').addEventListener('click', function() {
    document.querySelectorAll('.task8_2_p').forEach((p, index) => {
        p.textContent += ` (${index + 1})`;
    });
});

// 8.3 Сумма чисел из инпутов
document.getElementById('task8_3_button').addEventListener('click', function() {
    let sum = 0;
    document.querySelectorAll('.task8_3_input').forEach(input => {
        sum += parseFloat(input.value) || 0;
    });
    document.getElementById('task8_3_result').textContent = `Сумма: ${sum}`;
});

// === ЗАДАЧИ ГРУППЫ 9 (Общие функции) ===

// 9.1 Увеличение значения инпутов при потере фокуса
function increaseValue() {
    this.value = Number(this.value) + 1;
}
document.querySelectorAll('.task9_1_input').forEach(input => {
    input.addEventListener('blur', increaseValue);
});

// 9.2 Квадрат чисел в абзацах при клике
document.querySelectorAll('.task9_2_p').forEach(p => {
    p.addEventListener('click', function() {
        const num = parseFloat(this.textContent);
        if (!isNaN(num)) {
            this.textContent = num * num;
        }
    });
});

// === ЗАДАЧИ ГРУППЫ 10 (Анонимные функции) ===

// 10.1 Увеличение чисел в div при клике
document.querySelectorAll('.task10_1_div').forEach(div => {
    div.addEventListener('click', function() {
        this.textContent = parseInt(this.textContent) + 1;
    });
});

// === ЗАДАЧИ ГРУППЫ 11 (Однократные события) ===

// 11.1 Добавить адрес ссылки (однократно)
document.getElementById('task11_1_button').addEventListener('click', function() {
    const link = document.getElementById('task11_1_link');
    const href = link.getAttribute('href');
    link.textContent += ` (${href})`;
    this.disabled = true;
    this.textContent = 'Адрес добавлен';
});

// 11.2 Увеличение до 10
document.getElementById('task11_2_button').addEventListener('click', function handler() {
    const newValue = parseInt(this.textContent) + 1;
    this.textContent = newValue;
    if (newValue >= 10) {
        this.removeEventListener('click', handler);
        this.textContent = 'Достигнут предел 10';
    }
});

// === ЗАДАЧИ ГРУППЫ 12 (Однократные клики) ===

// 12.1 Восклицательный знак (однократно)
document.querySelectorAll('.task12_1_p').forEach(p => {
    p.addEventListener('click', function handler() {
        this.textContent += '!';
        this.removeEventListener('click', handler);
    });
});

// === ЗАДАЧИ ГРУППЫ 13 (Работа со списками) ===

// 13.1 Увеличение чисел в списке
document.querySelectorAll('#task13_1_list li').forEach(li => {
    li.addEventListener('click', function() {
        this.textContent = parseInt(this.textContent) + 1;
    });
});

// 13.2 Увеличение (однократно)
document.querySelectorAll('#task13_2_list li').forEach(li => {
    li.addEventListener('click', function handler() {
        this.textContent = parseInt(this.textContent) + 1;
        this.removeEventListener('click', handler);
    });
});

// 13.3 Увеличение до 10
document.querySelectorAll('#task13_3_list li').forEach(li => {
    li.addEventListener('click', function() {
        const value = parseInt(this.textContent);
        if (value < 10) {
            this.textContent = value + 1;
        }
    });
});

// === ЗАДАЧИ ГРУППЫ 14 (Работа с вводом) ===

// 14.1 Значение инпута в абзац при потере фокуса
document.getElementById('task14_1_input').addEventListener('blur', function() {
    document.getElementById('task14_1_result').textContent += this.value + ' ';
});

// 14.2 Сумма чисел из инпутов
document.getElementById('task14_2_button').addEventListener('click', function() {
    let sum = 0;
    document.querySelectorAll('.task14_2_input').forEach(input => {
        sum += parseFloat(input.value) || 0;
    });
    document.getElementById('task14_2_result').textContent = `Сумма: ${sum}`;
});

// 14.3 Сумма цифр числа
document.getElementById('task14_3_input').addEventListener('blur', function() {
    const numStr = this.value.toString();
    let sum = 0;
    for (let char of numStr) {
        if (!isNaN(parseInt(char))) {
            sum += parseInt(char);
        }
    }
    document.getElementById('task14_3_result').textContent = `Сумма цифр: ${sum}`;
});

// 14.4 Среднее арифметическое чисел через запятую
document.getElementById('task14_4_input').addEventListener('blur', function() {
    const numbers = this.value.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (numbers.length > 0) {
        const sum = numbers.reduce((a, b) => a + b, 0);
        const average = sum / numbers.length;
        document.getElementById('task14_4_result').textContent = `Среднее: ${average.toFixed(2)}`;
    } else {
        document.getElementById('task14_4_result').textContent = 'Введите числа через запятую';
    }
});

// === ЗАДАЧИ ГРУППЫ 15 (Обработка текста) ===

// 15.5 Разделение ФИО
document.getElementById('task15_5_input').addEventListener('blur', function() {
    const fio = this.value.split(' ');
    if (fio.length >= 3) {
        document.getElementById('task15_5_lastname').value = fio[0];
        document.getElementById('task15_5_firstname').value = fio[1];
        document.getElementById('task15_5_middlename').value = fio[2];
    }
});

// 15.6 ФИО с заглавных букв
document.getElementById('task15_6_input').addEventListener('blur', function() {
    const words = this.value.split(' ');
    const capitalized = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
    this.value = capitalized.join(' ');
});

// 15.7 Количество слов
document.getElementById('task15_7_input').addEventListener('blur', function() {
    const words = this.value.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('task15_7_result').textContent = `Количество слов: ${words.length}`;
});

// 15.8 Формат даты (dd.mm.yyyy → yyyy-mm-dd)
document.getElementById('task15_8_input').addEventListener('blur', function() {
    const parts = this.value.split('.');
    if (parts.length === 3) {
        this.value = `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
});

// === ЗАДАЧИ ГРУППЫ 16 (Разные задачи) ===

// 16.9 Проверка палиндрома
document.getElementById('task16_9_button').addEventListener('click', function() {
    const word = document.getElementById('task16_9_input').value.toLowerCase();
    const reversed = word.split('').reverse().join('');
    document.getElementById('task16_9_result').textContent = 
        word === reversed ? '✓ Палиндром' : '✗ Не палиндром';
});

// 16.10 Проверка на цифру 3
document.getElementById('task16_10_input').addEventListener('blur', function() {
    const hasThree = this.value.toString().includes('3');
    document.getElementById('task16_10_result').textContent = 
        hasThree ? 'Содержит цифру 3' : 'Не содержит цифру 3';
});

// 16.11 Нумерация абзацев
document.getElementById('task16_11_button').addEventListener('click', function() {
    document.querySelectorAll('.task16_11_p').forEach((p, index) => {
        p.textContent += ` (${index + 1})`;
    });
});

// 16.12 Добавить href к тексту ссылок
document.querySelectorAll('.task16_12_link').forEach(link => {
    const href = link.getAttribute('href');
    link.textContent += ` (${href})`;
});

// 16.13 Стрелка для http ссылок
document.querySelectorAll('.task16_13_link').forEach(link => {
    if (link.getAttribute('href').startsWith('http://')) {
        link.innerHTML += ' &rarr;';
    }
});

// 16.14 Квадрат числа в абзацах при клике
document.querySelectorAll('.task16_14_p').forEach(p => {
    p.addEventListener('click', function() {
        const num = parseFloat(this.textContent);
        if (!isNaN(num)) {
            this.textContent = num * num;
        }
    });
});

// 16.15 Определение дня недели
document.getElementById('task16_15_input').addEventListener('blur', function() {
    const parts = this.value.split('.');
    if (parts.length === 3) {
        const date = new Date(parts[2], parts[1] - 1, parts[0]);
        const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        document.getElementById('task16_15_result').textContent = days[date.getDay()];
    }
});

// 16.16 Кнопки +1/-1
document.getElementById('task16_16_plus').addEventListener('click', function() {
    const input = document.getElementById('task16_16_input');
    input.value = parseInt(input.value) + 1;
});
document.getElementById('task16_16_minus').addEventListener('click', function() {
    const input = document.getElementById('task16_16_input');
    const newValue = parseInt(input.value) - 1;
    input.value = newValue >= 0 ? newValue : 0;
});

// === ЗАДАЧИ ГРУППЫ 17 (Счетчики и генерация) ===

// 17.17 Счетчик кликов по абзацам
let clickCount = 0;
document.querySelectorAll('.task17_17_p').forEach(p => {
    p.addEventListener('click', function() {
        clickCount++;
        document.getElementById('task17_17_counter').value = clickCount;
    });
});

// 17.18 Обрезка текста до 10 символов
document.getElementById('task17_18_button').addEventListener('click', function() {
    document.querySelectorAll('.task17_18_div').forEach(div => {
        if (div.textContent.length > 10) {
            div.textContent = div.textContent.substring(0, 10) + '...';
        }
    });
});

// 17.19 Генерация случайной строки
document.getElementById('task17_19_button').addEventListener('click', function() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('task17_19_input').value = result;
});

// 17.20 Перемешивание строки
document.getElementById('task17_20_button').addEventListener('click', function() {
    const input = document.getElementById('task17_20_input');
    const chars = input.value.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    input.value = chars.join('');
});

// === ЗАДАЧИ ГРУППЫ 18 (Математические задачи) ===

// 18.21 Конвертация Фаренгейт → Цельсий
document.getElementById('task18_21_button').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('task18_21_input').value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('task18_21_result').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
});

// 18.22 Вычисление факториала
document.getElementById('task18_22_button').addEventListener('click', function() {
    const num = parseInt(document.getElementById('task18_22_input').value);
    if (num < 0) {
        document.getElementById('task18_22_result').textContent = 'Факториал определен только для неотрицательных чисел';
        return;
    }
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('task18_22_result').textContent = `${num}! = ${factorial}`;
});

// 18.23 Решение квадратного уравнения
document.getElementById('task18_23_button').addEventListener('click', function() {
    const a = parseFloat(document.getElementById('task18_23_a').value);
    const b = parseFloat(document.getElementById('task18_23_b').value);
    const c = parseFloat(document.getElementById('task18_23_c').value);
    
    if (a === 0) {
        document.getElementById('task18_23_result').textContent = 'Это не квадратное уравнение (a = 0)';
        return;
    }
    
    const discriminant = b * b - 4 * a * c;
    let result = '';
    
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Два корня: x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        result = `Один корень: x = ${x.toFixed(2)}`;
    } else {
        result = 'Нет действительных корней';
    }
    
    document.getElementById('task18_23_result').textContent = result;
});

// Инициализация сообщения в консоль
console.log('JavaScript загружен и готов к работе!');
console.log('Все задачи пронумерованы и используют уникальные ID.');