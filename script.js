let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function operate(operator) {
    if (currentInput !== '') {
        currentInput += ' ' + operator + ' ';
        display.textContent = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
