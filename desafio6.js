lista = [2, 10];



const idadesFiltradas = lista.filter(x => x >= 18);

if (idadesFiltradas.length === 0) {
    console.log("CRESCA E APARECA")
} else {
    console.log(Math.min(...idadesFiltradas))
}








// Imprima na tela a idade da pessoa mais jovem que pode participar.Se ninguém puder participar, imprima na tela a mensagem CRESCA E APARECA.

// Sample Input 0

// 12 18 27
// Sample Output 0

// 18