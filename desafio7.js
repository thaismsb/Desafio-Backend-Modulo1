let texto = "Cuidado menina."

let textoFormatado = texto.trim();
let palavras = textoFormatado.split(" ");

for (let item of palavras) {
    if (item === "," || item === "." || item === ";" || item === "!" || item === ":" || item === "") {
        palavras.pop(item)
    }
}

console.log(palavras.length);


