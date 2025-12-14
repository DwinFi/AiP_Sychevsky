const elem = document.getElementById('elem');

// 1. Последний узел и последний элемент
console.log('lastChild:', elem.lastChild);            
console.log('lastElementChild:', elem.lastElementChild);

// 2. Соседи div
console.log('nextSibling:', elem.nextSibling);        
console.log('nextElementSibling:', elem.nextElementSibling);

console.log('previousSibling:', elem.previousSibling);
console.log('previousElementSibling:', elem.previousElementSibling);

// 3. Вывод всех childNodes
console.log('--- childNodes (все узлы) ---');
for (let node of elem.childNodes) {
    console.log(node);
}

// 4. Вывод имен всех узлов
console.log('--- nodeName каждого узла ---');
for (let node of elem.childNodes) {
    console.log(node.nodeName);
}

// 5. Вывод только элементов и текстовых узлов
console.log('--- только элементы и текстовые узлы ---');
for (let node of elem.childNodes) {
    if (node.nodeType === 1 || node.nodeType === 3) {
        console.log(node);
    }
}

// 6. Вывод текста или данных комментария
console.log('--- textContent или data ---');
for (let node of elem.childNodes) {
    console.log(node.textContent || node.data);
}

// 7. Вывод только текстовых и комментариев
console.log('--- текстовые узлы и комментарии ---');
for (let node of elem.childNodes) {
    if (node.nodeType === 3 || node.nodeType === 8) {
        console.log(node.data);
    }
}

// 8. Отдельная обработка типов 1/3
console.log('--- элементы и текст отдельно ---');
for (let node of elem.childNodes) {
    if (node.nodeType === 1) {
        console.log('Элемент:', node.textContent);
    } else if (node.nodeType === 3) {
        console.log('Текст:', node.data);
    }
}

// 9. Помечаем узлы их типами
console.log('--- модификация DOM: добавляем типы ---');
for (let node of elem.childNodes) {
    let type;
    switch(node.nodeType) {
        case 1: type = 'элемент'; break;
        case 3: type = 'текст'; break;
        case 8: type = 'комментарий'; break;
        default: type = 'другой тип';
    }
    
    if (node.nodeType === 1) {
        node.textContent += ` [${type}]`;
    } else if (node.nodeType === 3 || node.nodeType === 8) {
        node.data += ` [${type}]`;
    }
}
