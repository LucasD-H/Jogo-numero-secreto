function VerificaValorChute() {
    const numero = +chute

    if (NumeroInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (MaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: O numero precisa estar maior que ${menorValor} e menor que ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2> Você Acertou! </h2>
        <h3> O numero secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é Menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é Maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function NumeroInvalido(numero) {
    return Number.isNaN(numero)
}

function MaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id = 'jogar-novamente') {
        window.location.reload()
    }
})