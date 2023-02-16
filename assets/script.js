const botaoGerar = document.querySelector("#btn-gerador")
const tamanhoEscolhido = document.querySelector("#tamanho-da-senha")
const mostrarQuantidade = document.querySelector("#numero-do-range")
const senhaGerada = document.querySelector("#senha-gerada")


function gerador(quantidade) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%¨&*()_/=-+*,.;?><][}{`^~"
    let senha = ''

    do {
        senha += caracteres[Math.floor(Math.random() * caracteres.length)]
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
    senhaGerada.innerHTML = gerador(tamanhoEscolhido.value)
    senhaGerada.style.display = 'block'

    tamanhoEscolhido.value = 4
    mostrarQuantidade.innerHTML = 4
})

senhaGerada.addEventListener('click', () => {
    navigator.clipboard.writeText(senhaGerada.textContent)
    senhaGerada.innerHTML = 'Senha Copiada'
})
