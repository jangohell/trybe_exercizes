let numeros = [14, 18, 22, 38, 52, 12, 73, 81, 25];

function numeroMaior() {
    let maior = 0
    for (let indice in numeros) {
        if (numeros[maior] < numeros[indice]) {
            maior = indice;
        }   
    }   
    return maior;
}


console.log(numeroMaior(numeros));