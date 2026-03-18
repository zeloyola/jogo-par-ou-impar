const visor = document.querySelector('#visor')
const numerosMaos = document.querySelector('#numerosMaos')
const parOuImpar = document.querySelector('#parOuImpar')
const buttonReiniciar = document.querySelector('#reset')

let userNumber = undefined 
let escolhaDoJogador = undefined

function escolheuImpar() {
    escolhaDoJogador = 1

    visor.innerHTML = 'Escolha um valor...'
    numerosMaos.classList.remove('hide')
    parOuImpar.classList.add('hide')
    buttonReiniciar.classList.add('hide')
}
// Botão Ímpar

function escolheuPar() {
    escolhaDoJogador = 0

    visor.innerHTML = 'Escolha um valor...'
    numerosMaos.classList.remove('hide')
    parOuImpar.classList.add('hide')
    buttonReiniciar.classList.add('hide')
}
// Botão Par

function calcularValores() {
    const R = Math.random() * 5
    const arredondado = Math.round(R)
    const calcularResto = (arredondado + userNumber) % 2
    return calcularResto

}
// Função para calcular o valor da máquina e calcular o resto para saber se deu par ou ímpar

function oResto() {
    const result = calcularValores()
    const usuarioVenceu = escolhaDoJogador === result
    if (usuarioVenceu) {
        visor.innerHTML = `Você venceu!!`
    } else {
        visor.innerHTML = 'Você perdeu!!'
    }

    parOuImpar.classList.add('hide')
    numerosMaos.classList.add('hide')
    buttonReiniciar.classList.remove('hide')

}
// Função para entregar o resultado

function reiniciar() {
    visor.innerHTML = 'Escolha uma opções... (Par ou Ímpar)'
    parOuImpar.classList.remove('hide')
    numerosMaos.classList.add('hide')
    buttonReiniciar.classList.add('hide')
}
// Botão Reiniciar

function btn_0() {
    userNumber = 0
    oResto()
}

function btn_1() {
    userNumber = 1
    oResto()
}

function btn_2() {
    userNumber = 2
    oResto()
}

function btn_3() {
    userNumber = 3
    oResto()
}

function btn_4() {
    userNumber = 4
    oResto()
}

function btn_5() {
    userNumber = 5
    oResto()
}