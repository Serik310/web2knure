let input = document.getElementById('input');

function addToInput(value) {
    input.value += value;
}

function clearInput() {
    input.value = '';
}

function calculate() {
    let expression = input.value;
    let operators = expression.replace(/[0-9]/g, '').split('');

    let numbers = expression.split(/\+|\-|\*|\//).map((num) => {
        return parseFloat(num);
    });

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
            result += numbers[i + 1];
        } else if (operators[i] === '-') {
            result -= numbers[i + 1];
        } else if (operators[i] === '*') {
            result *= numbers[i + 1];
        } else if (operators[i] === '/') {
            result /= numbers[i + 1];
        }
    }

    input.value = result;
}