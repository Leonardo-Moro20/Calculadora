let numero1 = '';
let numero2 = '';
let operacao = '+'
let temPrimeiroNum = false
let visor = document.getElementById('visor')
let botaop = document.getElementById('soma')
let botaom = document.getElementById('menos')
let botaov = document.getElementById('vezes')
let botaod = document.getElementById('dividir')
let resultado = 10

function salvanum(num) {
    if (!temPrimeiroNum) {
        primeiroNumero(num)
    }
    else {
        segundoNumero(num)
    }
}

function primeiroNumero(num) {
    numero1 = numero1 + num
    visor.innerHTML = numero1
}

function segundoNumero(num) {
    numero2 = numero2 + num
    visor.innerHTML = numero2
}

botaop.addEventListener('click', () => {
    temPrimeiroNum = true
    operacao = '+'
});

botaom.addEventListener('click', () => {
    temPrimeiroNum = true
    operacao = '-'
});

botaov.addEventListener('click', () => {
    temPrimeiroNum = true
    operacao = '*'
});
botaod.addEventListener('click', () => {
    temPrimeiroNum = true
    operacao = '/'
});

function calcular() {

    if (operacao === '+') {
        resultado = Number(numero1) + Number(numero2)
    }
    if (operacao === '-') {
        resultado = Number(numero1) - Number(numero2)
    }
    if (operacao === "*") {
        resultado = Number(numero1) * Number(numero2)
    }
    if (operacao === "/") {
        resultado = Number(numero1) / Number(numero2)
    }
    visor.innerHTML = resultado
    numero1 = ''
    numero2 = ''
    temPrimeiroNum = false
    document.getElementById('visor').innerHTML = resultado
}