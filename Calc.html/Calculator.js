let operation = '';
let num1 = 0;
let num2 = 0;

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    operation = '';
}

function setOperation(op) {
    operation = op;
}

function calculate() {
    num1 = parseFloat(document.getElementById('num1').value);
    num2 = parseFloat(document.getElementById('num2').value);
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'mul':
            result = num1 * num2;
            break;
        case 'div':
            result = num1 / num2;
            break;
        case 'mod':
            result = num1 % num2;
            break;
        default:
            result = 'Select an operation';
    }

    document.getElementById('display').value = result;
}