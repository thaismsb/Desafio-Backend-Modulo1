let lista = [10, 5, 20];

let numero = lista[1];
let limiteInferior = lista[2];
let limiteSuperior = lista[3];


function solucao(numero, limiteInferior, limiteSuperior) {

    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }

}