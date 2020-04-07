// CONTADORES
var indBuffer = 0
// BUFFERS
var screenNumBuffer = ''
var screenOptBuffer = ''
var screenBuffer = ''
// ARRAY
var ar = []

var resuBuffer = null
var a = null

// DISPLAY
function display() {
    const screen = document.getElementById('math')
    ar.forEach(function(nome){
        screenBuffer += `${nome} `
    })
    screen.innerHTML = `${screenBuffer}`
    screenBuffer = ''
}


//  BOTOES
function pressNum(number) {
    if (isNaN(ar[ar.length-1]) && ar[ar.length-1] == ')') {
        pressOperator('*')
    } else if (isNaN(ar[ar.length-1])) {
        screenNumBuffer = ''
        ar.push(number)
        screenNumBuffer = number
    } else {
        screenNumBuffer += number
        ar[ar.length-1] = screenNumBuffer
    }

    console.log(`Number ${ar.length}: ${screenNumBuffer}`);

    return display()
}

function pressOperator(opt) {
    ar.push(opt)

    console.log(`Operador ${ar.length}: ${ar[ar.length-1]}`);

    screenNumBuffer = ''
    screenOptBuffer = ''

    return display()
}

function pressParent(paret) {
    if (paret == '(') {
        if (isNaN(ar[ar.length-1])) {
            ar.push(paret)
        } else {
            ar.push('*')
            ar.push(paret)
        }
    } else {
        ar.push(paret)
    }

    console.log(`Operador ${ar.length}: ${ar[ar.length-1]}`);

    return display()
}


// RESULTADO
function  calc() {
    // Parentese
    for (o=0 ;o<5 ;o++) {
      for (var i=0; i<ar.length; i++) {
        if (ar[i] == '(') {
          for (a=i; a<ar.length; a++) {
            // Divisão
            if (ar[a] == '/') {
              ar[a] = (Number(ar[a-1]) / Number(ar[a+1]))
              ar.splice(a-1, 3, ar[a])
            }
            // Multiplicação
            if (ar[a] == '*') {
              ar[a] = (Number(ar[a-1]) * Number(ar[a+1]))
              ar.splice(a-1, 3, ar[a])
            }
            // Subtração
            if (ar[a] == '-') {
              ar[a] = (Number(ar[a-1]) - Number(ar[a+1]))
              ar.splice(a-1, 3, ar[a])
            }
            // Soma
            if (ar[a] == '+') {
              ar[a] = (Number(ar[a-1]) + Number(ar[a+1]))
              ar.splice(a-1, 3, ar[a])
            }
            //Resolução do Parentese
            if (ar[a] == ')' &&  ar[a-2] == '(') {
              ar.splice(a-2, 3, ar[a-1])
              a = ar.length
            }
          }
        }
      }
      // Resolução Geral
      for (var i=0; i<ar.length; i++) {
        // Divisão
        if (ar[i] == '/') {
            ar[i] = (Number(ar[i-1]) / Number(ar[i+1]))
            ar.splice(i-1, 3, ar[i])
            }
        // Multiplicação
        if (ar[i] == '*') {
          ar[i] = (Number(ar[i-1]) * Number(ar[i+1]))
          ar.splice(i-1, 3, ar[i])
        }
        if (ar[i] == '-') {
            ar[i] = (Number(ar[i-1]) - Number(ar[i+1]))
            ar.splice(i-1, 3, ar[i])
            }
        // Soma
        if (ar[i] == '+') {
          ar[i] = (Number(ar[i-1]) + Number(ar[i+1]))
          ar.splice(i-1, 3, ar[i])
        }
      }
    }
    return displayResu()
}

function displayResu() {
    const screen = document.getElementById('result')
    resuBuffer = ar[0].toString().length

    if (resuBuffer > 11) {
        a = (resuBuffer - 11) + 10
        screen.innerHTML = `${(ar[0] / 10**a).toFixed(4)}x10e${a}`

    } else if (resuBuffer > 11 && ar[0] < 1) {
        screen.innerHTML = ar[0].toFixed(5)

    } else {
        screen.innerHTML = ar
    }
}


// LIMPADOR
function clean() {
    const math = document.getElementById('math').innerHTML=""
    const resu = document.getElementById('result').innerHTML=""

    screenNumBuffer = ''
    screenOptBuffer = ''
    ar = []
    indBuffer = 0
}
