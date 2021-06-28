let nomes = ["Marcos", "Sabrina", "Francisco", "Sebastiana", "Beatriz", "Suelen"];

function maiorNome() {
    let nomeMaior = nomes[0];
    for (let indice in nomes) {
        if (nomeMaior.length < nomes[indice].length) {
            nomeMaior = nomes[indice];
        }
    }
    return nomeMaior;
}

console.log(maiorNome(nomes));