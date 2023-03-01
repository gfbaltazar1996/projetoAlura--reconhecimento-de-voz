function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        let msg='<div>Valor inválido</div>'
        switch (chute.toLowerCase()) {
          case 'red':
          case 'vermelho':
                document.body.style.backgroundColor = 'rgb(231 78 78 / 90%)';
            break;
          case 'blue':
          case 'azul':
            document.body.style.backgroundColor = 'rgb(78 178 231 / 90%)';
            break;
          case 'roxo':
          case 'purple':
            document.body.style.backgroundColor = 'rgb(78 79 231 / 90%)';
            break;
          case 'cores':
            msg="vermelho, azul ou roxo";
          break;
          case 'jogar novamente':
             window.location.reload();
          break;
        }
        elementoChute.innerHTML += msg;
        
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})