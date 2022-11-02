let previous = document.getElementById("previousInput");
let operatorInput = document.getElementById("operatorInput");
let current = document.getElementById("currentInput");
let decimal = true
let isPrevious = true
let isOperator = false

function addBtn(number) {
    if (isPrevious) {
        if (number === '.') {
            if(decimal) {
                previous.innerHTML += number
                decimal = false
            }
        }
        else if(number === 0 && previous.innerHTML.length < 2 && previous.innerHTML.endsWith(0)) {
            previous.innerHTML = number
        }
        else {
            previous.innerHTML += number
        }
    }
    else {
        if (number === '.') {
            if(decimal) {
                current.innerHTML += number
                decimal = false
            }
        }
        else if(number === 0 && current.innerHTML.length < 2 && current.innerHTML.endsWith(0)) {
            current.innerHTML = number
        }
        else {
            current.innerHTML += number
        }
    }
    isOperator = false 
}
function addOperator(operator) { 
    isOperator = true
    isPrevious = false
    decimal = true
    if (previous.innerHTML && operatorInput.innerHTML && current.innerHTML) {
        equal()
        operatorInput.innerHTML = operator
        isPrevious = false
    }else {
        operatorInput.innerHTML = operator
    }
}
function remove() {
    previous.innerHTML = '';
    current.innerHTML = '';
    operatorInput.innerHTML = '';
    isPrevious = true
    decimal = true
}
function equal () {
    let result;
    if(operatorInput.innerHTML === '+') {
       result = +previous.innerHTML + +current.innerHTML
    }
    else if (operatorInput.innerHTML === '-') {
        result = +previous.innerHTML - +current.innerHTML
    }
    else if (operatorInput.innerHTML === '*') {
        result = +previous.innerHTML * +current.innerHTML
    }
    else {
        result = +previous.innerHTML / +current.innerHTML
    }
    previous.innerHTML = result
    current.innerHTML = '';
    operatorInput.innerHTML = '';
    isPrevious = true
    decimal = true
}
function del() {
    if (isPrevious) {
        previous.innerHTML = previous.innerHTML.slice(0, previous.innerHTML.length - 1)
    }
    else if (isOperator) {
        operatorInput.innerHTML = operatorInput.innerHTML.slice(0, operatorInput.innerHTML.length - 1)
        isPrevious  = true
    }
    else {
        current.innerHTML = current.innerHTML.slice(0, current.innerHTML.length - 1)
        if(!current.innerHTML) {
            isOperator = true
        }
    }
}