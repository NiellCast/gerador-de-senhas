const botaoGerar = document.querySelector("#btn-gerador")
const tamanhoEscolhido = document.querySelector("#tamanho-da-senha")
const mostrarQuantidade = document.querySelector("#numero-do-range")
const senhaGerada = document.querySelector("#senha-gerada")
const letras = document.querySelector("#c-letras")
const numeros = document.querySelector("#c-numeros")
const especiais = document.querySelector("#c-especiais")


function gerador(quantidade, letras, numeros) {
    const caracteres = {
        letras: "abcdefghijklmnopqrstuvwxyz!@#$%¨&*()_/=-+*,.;?><][}{`^~1234567890",
        numeros: "1234567890"
    }
    let caracteresPossiveis = []
    let senha = ''


    switch (letras) {
        case true:
            caracteresPossiveis += caracteres.letras
            break
    }

    switch (numeros) {
        case true:
            caracteresPossiveis += caracteres.numeros
            break
    }


    do {
        let caracterGerado = caracteresPossiveis[Math.floor(Math.random() * caracteresPossiveis.length)]

        senha += caracterGerado

    } while (senha.length < quantidade)

    return senha
}


tamanhoEscolhido.addEventListener('mousemove', () => {
    mostrarQuantidade.innerHTML = tamanhoEscolhido.value
})

tamanhoEscolhido.addEventListener('pointermove', () => {
    mostrarQuantidade.innerHTML = tamanhoEscolhido.value
})

botaoGerar.addEventListener('click', () => {
    senhaGerada.innerHTML = gerador(tamanhoEscolhido.value, letras.checked, numeros.checked)
    senhaGerada.style.display = 'flex'
    senhaGerada.classList.add('linha-centralizada')
})

senhaGerada.addEventListener('click', () => {
    navigator.clipboard.writeText(senhaGerada.textContent)
    senhaGerada.innerHTML = 'Senha Copiada'
})
