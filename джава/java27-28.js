document.querySelector('#elem1').addEventListener('click', function(event) {
    console.log('=== Объект Event ===');
    console.log(event);
    console.log('Тип события:', event.type);
    console.log('Целевой элемент:', event.target);
    console.log('Текущий элемент:', event.currentTarget);
});

let elem2 = document.querySelector('#elem2');
elem2.addEventListener('click', func2);
elem2.addEventListener('dblclick', func2);

function func2(event) {
    if (event.type === 'click') {
        this.style.backgroundColor = 'green';
    } else if (event.type === 'dblclick') {
        this.style.backgroundColor = 'red';
    }
}

document.querySelector('#elem3').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName === 'UL') {
        console.log('Клик по UL');
    }
});

document.querySelector('#input4').addEventListener('keydown', function(event) {
    document.querySelector('#output4').textContent = 
        `Клавиша: "${event.key}", Код: ${event.code}, Код клавиши: ${event.keyCode}`;
});

document.querySelector('#input5').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#text5').textContent = this.value;
        this.value = '';
    }
});

document.querySelector('#elem6').addEventListener('click', function(event) {
    if (event.altKey) {
        this.style.backgroundColor = 'red';
    }
});

document.querySelector('#elem7').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        if (event.ctrlKey) {
            event.target.textContent += '1';
        } else if (event.shiftKey) {
            event.target.textContent += '2';
        }
    }
});

document.querySelectorAll('#link1, #link2').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        this.textContent += ` (${this.href})`;
    });
});

document.querySelector('#sumLink').addEventListener('click', function(event) {
    event.preventDefault();
    let num1 = parseInt(document.querySelector('#num1').value) || 0;
    let num2 = parseInt(document.querySelector('#num2').value) || 0;
    document.querySelector('#result8').textContent = `Сумма: ${num1 + num2}`;
});

document.querySelector('#div1').addEventListener('click', function() {
    console.log('Клик на DIV 1');
});
document.querySelector('#div2').addEventListener('click', function() {
    console.log('Клик на DIV 2');
});
document.querySelector('#div3').addEventListener('click', function() {
    console.log('Клик на DIV 3');
});

document.querySelector('#div10').addEventListener('click', function(event) {
    console.log('Событие в:', event.target.tagName);
    
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    } else if (event.target.tagName === 'UL') {
        console.log('Клик по UL');
    }
});

document.querySelector('#div11').addEventListener('click', function() {
    console.log('Клик на DIV 1');
});
document.querySelector('#div12').addEventListener('click', function(event) {
    console.log('Клик на DIV 2');
    event.stopPropagation();
});
document.querySelector('#div13').addEventListener('click', function() {
    console.log('Клик на DIV 3');
});

let list12 = document.querySelector('#list12');
list12.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    }
});
document.querySelector('#addBtn12').addEventListener('click', function() {
    let newLi = document.createElement('li');
    newLi.textContent = 'Новый элемент';
    list12.appendChild(newLi);
});

let list13 = document.querySelector('#list13');
list13.addEventListener('click', function(event) {
    let li = event.target.closest('li');
    if (li) {
        li.innerHTML += '!';
    }
});
document.querySelector('#addBtn13').addEventListener('click', function() {
    let newLi = document.createElement('li');
    newLi.innerHTML = 'Новый элемент <i>курсив</i>';
    list13.appendChild(newLi);
});

function func14() {
    console.log(this.value);
}
func14.call(document.querySelector('#elem14_1'));
func14.call(document.querySelector('#elem14_2'));
func14.call(document.querySelector('#elem14_3'));

function func15(surname, name) {
    console.log(this.value + ', ' + name + ' ' + surname);
}
func15.call(document.querySelector('#elem15'), 'Smit', 'John');

function func16(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}
func16.apply(document.querySelector('#elem16'), ['Smit', 'John']);

function func17(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}
func17 = func17.bind(document.querySelector('#elem17'));
func17('John', 'Smit');
func17('Eric', 'Luis');