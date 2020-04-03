var screenNumBuffer = ''
var numContador = 0
var optContador = 1
var screenOptBuffer = ''
var screenBuffer = ''
var ar = []


// var screenNumBuffer2 = ''
var result = undefined

//  BOTOES
function pressNum(number) {
    screenNumBuffer += number

    ar[numContador] = screenNumBuffer

    console.log(`Number ${numContador}: ${ar[numContador]}`);

    return display()

}

function pressOperator(opt) {
    screenOptBuffer = opt
    console.log(`Operador ${optContador}: ${screenOptBuffer}`);


    ar[optContador] = screenOptBuffer

    numContador += 2
    optContador += 2
    screenNumBuffer = ''
    screenOptBuffer = ''

    return display()
}

function display() {
    const screen = document.getElementById('math')

    ar.forEach(function(nome){
        screenBuffer += nome
    })

    screen.innerHTML = `${screenBuffer}`
    screenBuffer = ''
}

// RESULTADO

function  calc() {
    let num1 = Number(screenNumBuffer)
    let num2 = Number(screenNumBuffer2)
    let opt = screenOptBuffer

    if (opt == '/') {
        result = (num1 / num2)
    }   else if (opt == '*') {
        result = (num1 * num2)

    }   else if (opt == '-') {
        result = (num1 - num2)

    }   else if (opt == '+') {
        result = (num1 + num2)

    } else {
        window.alert('Insira um Operador Válido');
    }

    return displayResu()

    // window.alert(`${result}`);
}

function displayResu() {
    const screen = document.getElementById('result')
    screen.innerHTML = result
}

// LIMPADOR

function clean() {
    const math = document.getElementById('math').innerHTML=""

    const resu = document.getElementById('result').innerHTML=""

    screenNumBuffer = ''
    screenOptBuffer = ''
    screenNumBuffer2 = ''
    result = undefined
}
