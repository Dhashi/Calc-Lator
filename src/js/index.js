var screenNumBuffer = ''
var screenOptBuffer = ''
var screenNumBuffer2 = ''
var result = undefined


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
    const screen = document.getElementById('resu')
    screen.innerHTML = result
}


function pressNum(number) {
    if (screenOptBuffer == '') {
        let num = number
        let txtNum = number.toString()
        screenNumBuffer += txtNum
        console.log(`NUM 1: ${screenNumBuffer}`);
        return display()
    }
}

function display() {
    const screen = document.getElementById('l1')
    screen.innerHTML = screenNumBuffer
}


function pressOperator(opt) {
    screenOptBuffer = opt
    console.log(screenOptBuffer);
    return displayOpt()
}

function displayOpt() {
    const screen = document.getElementById('l2')
    screen.innerHTML = screenOptBuffer
}


function pressNum2(number) {

    if (screenNumBuffer != '' && screenOptBuffer != '') {
        let num = number
        let txtNum = num.toString()
        screenNumBuffer2 += txtNum
        console.log(`NUM 2: ${screenNumBuffer2}`)
        return display2()
    }
}

function display2() {
    const screen = document.getElementById('l3')
    screen.innerHTML = screenNumBuffer2
}


function clean() {
    const l1 = document.getElementById('l1').innerHTML=""
    const l2 = document.getElementById('l2').innerHTML=""
    const l3 = document.getElementById('l3').innerHTML=""
    const l4 = document.getElementById('resu').innerHTML=""

    screenNumBuffer = ''
    screenOptBuffer = ''
    screenNumBuffer2 = ''
    result = undefined
}
