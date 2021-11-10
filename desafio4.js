let min = 2;
let max = 10;
let valores = [0, 5, 6, 10, 11];
let valoresPermitidos = [];

for (let item of valores) {
    if (item >= min && item <= max) {
        valoresPermitidos.push(item)
    }
}

console.log(valoresPermitidos);