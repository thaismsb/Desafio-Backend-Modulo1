let numeros = [10, 5, 5, 5, 4, 1];

let total = 0;

for (let item of numeros) {
    total += item;
}

if (total / numeros.length === 1 || total % numeros.length === 0) {
    console.log(numeros.length)
} else {
    console.log(total % numeros.length)
}

