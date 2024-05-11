const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return Math.floor((Math.random() * maiorValor + 1))
}

console.log(numeroSecreto)

const ElementoMenorValor = document.getElementById('menor-valor')
ElementoMenorValor.innerHTML = menorValor
const ElementoMaiorValor = document.getElementById('maior-valor')
ElementoMaiorValor.innerHTML = maiorValor