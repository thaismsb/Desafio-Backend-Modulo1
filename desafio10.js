let jogadores = [
    {
        nome: "Herman",
        jogada: 1
    },
    {
        nome: "Rhodes",
        jogada: 1
    },
    {
        nome: "Beach",
        jogada: 1
    },
    {
        nome: "Laurel",
        jogada: 1
    },
    {
        nome: "Beatrice",
        jogada: 1
    },
    {
        nome: "Alison",
        jogada: 0
    },
    {
        nome: "Saundra",
        jogada: 1
    },
    {
        nome: "Klein",
        jogada: 0
    }
]
let pessoaUm = [];
let totalUns = 0;
let totalZeros = 0;
let pessoaZero = [];

for (let item of jogadores) {
    if (item.jogada === 1) {
        totalUns += 1;
        pessoaUm.push(item.nome);

    } else if (item.jogada === 0) {
        totalZeros += 1;
        pessoaZero.push(item.nome);
    }
}



if (totalUns === 1) {
    console.log(pessoaUm.toString())

} else if (totalZeros === 1) {
    console.log(pessoaZero.toString())

} else {
    console.log("NINGUEM")
}


