"use strict";

document.addEventListener('DOMContentLoaded', function() {

// === №1⊗jsPmTrCn — обратный отсчёт от 100 (в консоль) ===
document.querySelector('#btn1').addEventListener('click', function() {
  let count = 100;
  const timer = setInterval(() => {
    console.log(count);
    count--;
  }, 1000);
});

// === №1⊗jsPmTrTS — от 10 до 0 с остановкой ===
document.querySelector('#btn2').addEventListener('click', function() {
  let count = 10;
  const timer = setInterval(() => {
    console.log(count);
    if (count <= 0) {
      clearInterval(timer);
    }
    count--;
  }, 1000);
});

// === №1⊗jsPmTrLB — кнопка для отсчёта от 100 ===
document.querySelector('#btn3').addEventListener('click', function() {
  let count = 100;
  setInterval(() => console.log(count--), 1000);
});

// === №1⊗jsPmTrML — предотвращение множественного запуска ===
let isRunning4 = false;
document.querySelector('#btn4').addEventListener('click', function() {
  if (isRunning4) return;
  isRunning4 = true;
  let count = 100;
  const timer = setInterval(() => {
    console.log(count--);
    if (count < 0) {
      clearInterval(timer);
      isRunning4 = false;
    }
  }, 1000);
});

// === №1⊗jsPmTrSB — старт/стоп с автоостановкой ===
let counter = 100;
let mainTimer = null;
const counterDisplay = document.querySelector('#counterDisplay');

document.querySelector('#startBtn').addEventListener('click', function() {
  if (mainTimer) return;
  counter = 100;
  counterDisplay.textContent = counter;
  mainTimer = setInterval(() => {
    counter--;
    counterDisplay.textContent = counter;
    if (counter <= 0) {
      clearInterval(mainTimer);
      mainTimer = null;
    }
  }, 1000);
});

document.querySelector('#stopBtn').addEventListener('click', function() {
  if (mainTimer) {
    clearInterval(mainTimer);
    mainTimer = null;
  }
});

// === №2–5⊗jsPmTrSB — исправленный таймер с ошибками ===
let fixTimer = null;
document.querySelector('#startFix').addEventListener('click', function() {
  if (fixTimer) return;
  fixTimer = setInterval(() => {
    let date = new Date();
    console.log(`${date.getMinutes()}:${date.getSeconds()}`);
  }, 1000);
});
document.querySelector('#stopFix').addEventListener('click', function() {
  if (fixTimer) {
    clearInterval(fixTimer);
    fixTimer = null;
  }
});

// === №6⊗jsPmTrSB — старт/стоп с переподключением ===
let reTimer = null;
const startReBtn = document.querySelector('#startRe');
const stopReBtn = document.querySelector('#stopRe');

function startReCount() {
  if (reTimer) return;
  reTimer = setInterval(() => console.log('Тик!'), 1000);
  startReBtn.removeEventListener('click', startReCount);
}
function stopReCount() {
  if (reTimer) {
    clearInterval(reTimer);
    reTimer = null;
    startReBtn.addEventListener('click', startReCount);
  }
}
startReBtn.addEventListener('click', startReCount);
stopReBtn.addEventListener('click', stopReCount);

// === №1⊗jsPmTrDm — таймер для инпута (запускается сразу, как в условии) ===
const inputDm = document.querySelector('#inputDm');
if (inputDm) { // защита от null
  let dmTimer = setInterval(() => {
    let val = Number(inputDm.value);
    if (val <= 0) {
      clearInterval(dmTimer);
      return;
    }
    inputDm.value = val - 1;
  }, 1000);
}

// === №1⊗jsPmTrTCL — кнопка с увеличением значения (с сохранением this) ===
const elemBtn = document.querySelector('#elem');
if (elemBtn) {
  elemBtn.addEventListener('click', function() {
    const btn = this;
    setInterval(() => {
      btn.value = Number(btn.value) + 1;
    }, 1000);
  });
}

// === Практика DOM ===
// №1⊗jsPmTrPr — увеличение числа в абзаце
const btnPara1 = document.querySelector('#btnPara1');
if (btnPara1) {
  btnPara1.addEventListener('click', function() {
    const para = document.querySelector('#para1');
    if (para) {
      setInterval(() => {
        para.textContent = Number(para.textContent) + 1;
      }, 1000);
    }
  });
}

// №2⊗jsPmTrPr — уменьшение до 0
const btnPara2 = document.querySelector('#btnPara2');
if (btnPara2) {
  btnPara2.addEventListener('click', function() {
    const para = document.querySelector('#para2');
    if (para) {
      const timer = setInterval(() => {
        let val = Number(para.textContent);
        if (val <= 0) {
          clearInterval(timer);
          return;
        }
        para.textContent = val - 1;
      }, 1000);
    }
  });
}

// №3⊗jsPmTrPr — квадрат числа
const inputSquare = document.querySelector('#inputSquare');
if (inputSquare) {
  setInterval(() => {
    const num = Number(inputSquare.value) || 0;
    const squareResult = document.querySelector('#squareResult');
    if (squareResult) {
      squareResult.textContent = num * num;
    }
  }, 1000);
}

// №4⊗jsPmTrPr — отсчёт по потере фокуса
const inputCountdown = document.querySelector('#inputCountdown');
const countdownText = document.querySelector('#countdownText');
if (inputCountdown && countdownText) {
  inputCountdown.addEventListener('blur', function() {
    let count = Number(this.value) || 0;
    countdownText.textContent = count;
    if (count <= 0) return;
    const timer = setInterval(() => {
      count--;
      countdownText.textContent = count;
      if (count <= 0) clearInterval(timer);
    }, 1000);
  });
}

// №5⊗jsPmTrPr — установка и отсчёт
const inputToPara = document.querySelector('#inputToPara');
const paraCountdown = document.querySelector('#paraCountdown');
let paraTimer = null;
const btnSetPara = document.querySelector('#btnSetPara');
if (btnSetPara && inputToPara && paraCountdown) {
  btnSetPara.addEventListener('click', function() {
    if (paraTimer) clearInterval(paraTimer);
    let count = Number(inputToPara.value) || 0;
    paraCountdown.textContent = count;
    if (count <= 0) return;
    paraTimer = setInterval(() => {
      count--;
      paraCountdown.textContent = count;
      if (count <= 0) clearInterval(paraTimer);
    }, 1000);
  });
}

// №6⊗jsPmTrPr — бесконечный счётчик
let infTimer = null;
const btnStartInf = document.querySelector('#btnStartInf');
const btnStopInf = document.querySelector('#btnStopInf');
const infiniteCounter = document.querySelector('#infiniteCounter');
if (btnStartInf && btnStopInf && infiniteCounter) {
  btnStartInf.addEventListener('click', function() {
    if (infTimer) return;
    let count = 0;
    infTimer = setInterval(() => {
      infiniteCounter.textContent = ++count;
    }, 1000);
  });
  btnStopInf.addEventListener('click', function() {
    if (infTimer) {
      clearInterval(infTimer);
      infTimer = null;
    }
  });
}

// №7⊗jsPmTrPr — мигающий цвет
let isRed = true;
const colorToggle = document.querySelector('#colorToggle');
if (colorToggle) {
  setInterval(() => {
    colorToggle.style.color = isRed ? 'green' : 'red';
    isRed = !isRed;
  }, 1000);
}

// №8⊗jsPmTrPr — часы
const clock = document.querySelector('#clock');
if (clock) {
  setInterval(() => {
    const now = new Date();
    clock.textContent = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
  }, 1000);
}

// №1⊗jsPmTrDl — сообщение через 10 сек
setTimeout(() => {
  const delayedMessage = document.querySelector('#delayedMessage');
  if (delayedMessage) {
    delayedMessage.textContent = 'Прошло 10 секунд!';
  }
}, 10000);

// №1⊗jsPmTrDT — рекурсивный таймер: 0, 1, 2, 3... каждую секунду
let step = 0;
(function tick() {
  console.log(step);
  step++;
  setTimeout(tick, 1000);
})();

// === Создание элементов ===
// №1⊗jsPmMnCIE
const list1 = document.querySelector('#list1');
if (list1) {
  const li1 = document.createElement('li');
  li1.textContent = 'item';
  list1.appendChild(li1);
}

// №2⊗jsPmMnCIE
const addLiBtn = document.querySelector('#addLiBtn');
const list2 = document.querySelector('#list2');
if (addLiBtn && list2) {
  addLiBtn.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = 'item';
    list2.appendChild(li);
  });
}

}); // Конец DOMContentLoaded