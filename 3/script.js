window.addEventListener("load", (event => {
    console.log('loaded');
}));

function isSimple(a) {
    let result = 0;
    if (a === 1) {
        return true;
    }

    for (let i = 1 ; i <= a; ++i) {
        if (a % i === 0) {
            ++result;
        }
        if (result > 2) {
            break;
        }
    }

    return (result > 2) ? false : true;
}

function getNod() {
    let firstNumElement = document.getElementById('nod-first-value');
    let secondNumElement = document.getElementById('nod-second-value');
    let nodResultElement = document.getElementById('nod-result');

    let firstValue = parseInt(firstNumElement.value);
    let secondValue = parseInt(secondNumElement.value);

    while (firstValue !== secondValue) {
        if (firstValue > secondValue) {
            firstValue -= secondValue;
        } else {
            secondValue -= firstValue;
        }
    }

    nodResultElement.innerText = firstValue;
}


// Простые числа в лоб
function getSimple() {
    let firstValue = parseInt(document.getElementById('simple-first-value').value);
    let lastValue = parseInt(document.getElementById('simple-last-value').value);

    let simpleResultElement = document.getElementById('simple-result');
    simpleResultElement.innerHTML = '';

    let simpleCountElement = document.getElementById('simple-count');

    let count = 0;
    for (let i = firstValue; i <= lastValue; ++i) {
        if (isSimple(i)) {
            let newElement = document.createElement('td');
            newElement.innerText = i;
            simpleResultElement.appendChild(newElement);

            ++count;
        }
    }

    simpleCountElement.innerText = `By loop: ${count}\nEvaluated (the second value n/ln(n)): ${lastValue / Math.log(lastValue)}`;
}

function sharpAddTableLine(arr, element, idx) {
    let tableLineElement = document.createElement('tr');
    
    let tableElement = document.createElement('th');
    tableElement.innerText = idx;
    tableLineElement.appendChild(tableElement);

    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === 1) {
            let tableElement = document.createElement('td');
            tableElement.innerText = i;
            tableLineElement.appendChild(tableElement);
        }
    }

    element.appendChild(tableLineElement);
}

// Решето Эратосфена
function getSharp() {
    let sharpValue = parseInt(document.getElementById('sharp-value').value);
    let sharpCountElement = document.getElementById('sharp-count');

    let sharpResultElement = document.getElementById('sharp-result');
    sharpResultElement.innerHTML = '';

    let arr = new Array(sharpValue + 1);
    arr.fill(1, 0, sharpValue + 1);
    sharpAddTableLine(arr, sharpResultElement, 'RAW');
    for (let i = 2 ; i <= Math.round(Math.sqrt(arr.length)) ; ++i) {
        if (arr[i] === 1) {
            for (let j = 2 * i; j < arr.length; j += i) {
                arr[j] = 0;
            }
            sharpAddTableLine(arr, sharpResultElement, i);
        }
    }

    let count = 0;
    for (let i = 1 ; i < arr.length; ++i) {
        if (arr[i] === 1) {
            ++count;
        }
    }

    sharpCountElement.innerText = `Count: ${count}`;
}