// let precos = [200, 150, 50, 100];
let precos = [200, 200, 200];

let total = 0;
if (precos.length > 2) {

    for (let item of precos) {
        total += item;
    }
    let valorMenorInteiro = Math.min(...precos);

    let valorPelaMetade = valorMenorInteiro / 2;

    let totalComDesconto = total - valorMenorInteiro + valorPelaMetade;

    console.log(totalComDesconto);

} else {

    for (let item of precos) {
        total += item;
    }
    console.log(total);

}
