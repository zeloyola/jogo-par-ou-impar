// const buttonPar = document.querySelector('#par')
// const buttonImpar = document.querySelector('#impar')
const visor = document.querySelector('#visor')
const numerosMaos = document.querySelector('#numerosMaos')
const parOuImpar = document.querySelector('#parOuImpar')

let userNumber = undefined
let escolhaDoJogador = undefined

function escolhendoParOuImpar() {
    visor.innerHTML = 'Escolha um valor...'
    numerosMaos.classList.remove('hide')
    parOuImpar.classList.add('hide')

}



function calcularValores() {
    const R = Math.random() * 5
    const arredondado = Math.round(R)
    const calcularResto = (arredondado + userNumber) % 2
    return calcularResto
}
// Função para calcular o valor da máquina e calcular o resto para saber se deu par ou ímpar

function asdasd() {
    const result = calcularValores()

}

function btn_0() {
    userNumber = 0

}


function btn_1() {
    userNumber = 1
    asdasd()
}

function btn_2() {
    userNumber = 2
    asdasd()
}

function btn_3() {
    userNumber = 3
    asdasd()
}

function btn_4() {
    userNumber = 4
    asdasd()
}

function btn_5() {
    userNumber = 5
    asdasd()
}



// function escolherParOuImpar() {
//     visor.innerHTML = 'Escolha suas opções... (Par ou Ímpar)'
//     numerosMaos.classList.remove('hide')
// }