// CONTADORES
var indBuffer = 0
// BUFFERS
var screenNumBuffer = ''
var screenOptBuffer = ''
var screenBuffer = ''
// ARRAY
var ar = []


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
    screenNumBuffer += number
    ar[indBuffer] = screenNumBuffer
    console.log(`Number ${indBuffer}: ${ar[indBuffer]}`);

    return display()
}

function pressOperator(opt) {
    screenOptBuffer = opt
    indBuffer++
    ar[indBuffer] = screenOptBuffer

    console.log(`Operador ${indBuffer}: ${indBuffer}`);

    screenNumBuffer = ''
    screenOptBuffer = ''
    indBuffer++

    return display()
}

function pressParent(paret) {
    if (paret == '(') {
        ar[indBuffer] = paret
        indBuffer++
    } else {
        indBuffer++
        ar[indBuffer] = paret
    }

    return display()
}



// RESULTADO
function  calc() {
    // Parentese
    for (o=0 ;o<3 ;o++) {
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
    screen.innerHTML = ar
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
