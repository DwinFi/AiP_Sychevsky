// берем список по id
let parent = document.querySelector('#elemList');

// 1. выделяем первый и последний элементы
parent.firstElementChild.style.color = 'red';
parent.lastElementChild.style.color = 'red';

// 2. выводим текст всех дочерних элементов
for (let elem of parent.children) {
    console.log(elem.textContent + '!');
}

// 3. устанавливаем рамку родителю списка
parent.parentElement.style.border = '2px solid red';

// 4. работа с ближайшими элементами (closest)
let elemDiv = document.getElementById('elemDiv');

let parentDiv = elemDiv.closest('div');
console.log('closest div:', parentDiv);

let parentWithClass = elemDiv.closest('.www');
console.log('closest .www:', parentWithClass);

// 5. соседи для одного из элементов li
let elemLi = document.getElementById('elemLi4');

if (elemLi.previousElementSibling) {
    elemLi.previousElementSibling.textContent += '!';
}

if (elemLi.nextElementSibling) {
    elemLi.nextElementSibling.textContent += '!';
}

if (elemLi.nextElementSibling && elemLi.nextElementSibling.nextElementSibling) {
    elemLi.nextElementSibling.nextElementSibling.textContent += '!';
}

// 6. поменять местами текст у соседей
let prev = elemLi.previousElementSibling;
let next = elemLi.nextElementSibling;

if (prev && next) {
    let tmp = prev.textContent;
    prev.textContent = next.textContent;
    next.textContent = tmp;
}

// 7. изменить текст элемента
elemLi.textContent = 'Какой-нибудь текст';

// 8. покрасить все <li> в красный
let liElements = document.getElementsByTagName('li');
for (let i = 0; i < liElements.length; i++) {
    liElements[i].style.color = 'red';
}

// 9. покрасить элементы с классом .www
let elementsWWW = document.getElementsByClassName('www');
for (let i = 0; i < elementsWWW.length; i++) {
    elementsWWW[i].style.color = 'red';
}

// 10. выбор элементов внутри #parent
parent = document.querySelector('#parent');

let elems1 = parent.getElementsByClassName('www');
let elems2 = parent.getElementsByClassName('ggg');

console.log(elems1, elems2);
