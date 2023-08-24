
let numbers = [];
let result = 0;

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "No se puede dividir por cero";
    }
}

const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));


numbers.push(num1, num2);

result = suma(num1, num2);

console.log("Números ingresados:", numbers);
console.log("Resultado de la suma:", result);

const searchValue = parseFloat(prompt("Ingrese un número para buscar en el array:"));
if (numbers.includes(searchValue)) {
    console.log(`El número ${searchValue} está en el array.`);
} else {
    console.log(`El número ${searchValue} no está en el array.`);
}
