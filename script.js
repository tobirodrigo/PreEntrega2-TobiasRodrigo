
class Calculator {
    constructor() {
        this.numbers = [];
        this.result = 0;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "No se puede dividir por cero";
        }
    }

    addNumberToHistory(number) {
        this.numbers.push(number);
    }

    performSum(a, b) {
        this.result = this.add(a, b);
    }

    searchNumberInHistory(value) {
        if (this.numbers.includes(value)) {
            return `El número ${value} está en el array.`;
        } else {
            return `El número ${value} no está en el array.`;
        }
    }
}

const calculator = new Calculator();

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

calculator.addNumberToHistory(num1);
calculator.addNumberToHistory(num2);
calculator.performSum(num1, num2);

console.log("Números ingresados:", calculator.numbers);
console.log("Resultado de la suma:", calculator.result);

const searchValue = parseFloat(prompt("Ingrese un número para buscar en el array:"));
console.log(calculator.searchNumberInHistory(searchValue));
