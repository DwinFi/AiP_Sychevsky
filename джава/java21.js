
let elem = document.querySelector('#elem');
let value = elem.getAttribute('value');

console.log(value);
let wwwzzz = elem.getAttribute('.www zzz');
console.log(wwwzzz);
elem.setAttribute('value', '!!!');
elem.setAttribute('class', 'valid');
elem.removeAttribute('value');
elem.hasAttribute('value');

        document.getElementById('elem').addEventListener('click', function() {
            const dataText = this.getAttribute('data-text');
            this.textContent += dataText;
        });

       
        document.querySelectorAll('div[data-num]').forEach(div => {
            div.addEventListener('click', function() {
                const dataNum = this.getAttribute('data-num');
                this.textContent += dataNum;
            });
        });


        const clickCounter = document.getElementById('clickCounter');
        const showClicks = document.getElementById('showClicks');
        const clickResult = document.getElementById('clickResult');

        clickCounter.addEventListener('click', function() {
            let count = parseInt(this.getAttribute('data-count')) || 0;
            count++;
            this.setAttribute('data-count', count);
        });

        showClicks.addEventListener('click', function() {
            const count = clickCounter.getAttribute('data-count');
            clickResult.textContent = `Количество кликов: ${count}`;
        });

           document.getElementById('elem4').addEventListener('blur', function() {
            const requiredLength = parseInt(this.getAttribute('data-length'));
            const actualLength = this.value.length;
            const errorElement = document.getElementById('error4');

            if (actualLength !== requiredLength) {
                errorElement.textContent = `Ошибка: нужно ввести ${requiredLength} символов, а введено ${actualLength}`;
            } else {
                errorElement.textContent = '';
            }
        });

  
        document.getElementById('elem5').addEventListener('blur', function() {
            const minLength = parseInt(this.getAttribute('data-min'));
            const maxLength = parseInt(this.getAttribute('data-max'));
            const actualLength = this.value.length;
            const errorElement = document.getElementById('error5');

            if (actualLength < minLength || actualLength > maxLength) {
                errorElement.textContent = `Ошибка: нужно ввести от ${minLength} до ${maxLength} символов, а введено ${actualLength}`;
            } else {
                errorElement.textContent = '';
            }

        });
        elem = document.querySelector('#elem');
        elem.addEventListener('click', function(){
            let res = elem.dataset.productPrice*elem.dataset.productAmount;
            console.log(res);
        });
         // Задача с data-атрибутами
        document.getElementById('setDataNum').addEventListener('click', function() {
            const paragraphs = document.querySelectorAll('.paragraph');
            paragraphs.forEach((paragraph, index) => {
                paragraph.setAttribute('data-num', index + 1);
            });
        });

        // Задачи с классами
        elem = document.getElementById('elem');
        const result = document.getElementById('result');

        document.getElementById('countClasses').addEventListener('click', function() {
            const classCount = elem.classList.length;
            result.textContent = `Количество классов: ${classCount}`;
        });

        document.getElementById('iterateClasses').addEventListener('click', function() {
            let classesList = 'Классы элемента: ';
            elem.classList.forEach(className => {
                classesList += className + ' ';
            });
            result.textContent = classesList;
        });

        document.getElementById('addClass').addEventListener('click', function() {
            elem.classList.add('xxx');
            result.textContent = 'Класс xxx добавлен';
        });

        document.getElementById('removeClasses').addEventListener('click', function() {
            elem.classList.remove('www', 'zzz');
            result.textContent = 'Классы www и zzz удалены';
        });

        document.getElementById('checkClass').addEventListener('click', function() {
            const hasClass = elem.classList.contains('ggg');
            result.textContent = hasClass ? 'Элемент содержит класс ggg' : 'Элемент не содержит класс ggg';
        });

        document.getElementById('toggleClass').addEventListener('click', function() {
            elem.classList.toggle('www');
            const hasClass = elem.classList.contains('www');
            result.textContent = hasClass ? 'Класс www добавлен' : 'Класс www удален';
        });