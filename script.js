// variables y objetos necesarios
let numbers = [];
let result = 0;

// Funciones para realizar operaciones
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

// entradas mediante prompt()
const num1 = parseFloat(prompt("Ingrese el primer número:"));
const num2 = parseFloat(prompt("Ingrese el segundo número:"));

//  operaciones
numbers.push(num1, num2);

result = suma(num1, num2);

// Efectuar una salida
console.log("Números ingresados:", numbers);
console.log("Resultado de la suma:", result);

// Métodos de búsqueda y filtrado sobre el Array
const searchValue = parseFloat(prompt("Ingrese un número para buscar en el array:"));
if (numbers.includes(searchValue)) {
    console.log(`El número ${searchValue} está en el array.`);
} else {
    console.log(`El número ${searchValue} no está en el array.`);
}
