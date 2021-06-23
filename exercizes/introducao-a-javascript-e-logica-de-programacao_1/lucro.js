let valorProduto = 500;
let valorImposto = valorProduto / 100 * 20;
let valorVenda = 1000;

if (valorProduto && valorImposto && valorVenda < 0) {
    console.log("ERRO! Valores inválidos");
} else {
    let valorFinal = valorProduto - valorImposto;
    console.log((valorVenda - valorFinal) * 1000);
}