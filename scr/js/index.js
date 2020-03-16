// Ouvidoria
var nove = document.getElementById('nove')
nove.addEventListener('click', Nove)

var oito = document.getElementById('oito')
oito.addEventListener('click', Oito)

var sete = document.getElementById('sete')
sete.addEventListener('click', Sete)

var seis = document.getElementById('seis')
seis.addEventListener('click', Seis)

var cinco = document.getElementById('cinco')
cinco.addEventListener('click', Cinco)

var quatro = document.getElementById('quatro')
quatro.addEventListener('click', Quatro)

var tres = document.getElementById('tres')
tres.addEventListener('click', Tres)

var dois = document.getElementById('dois')
dois.addEventListener('click', Dois)

var um = document.getElementById('um')
um.addEventListener('click', Um)

// Funcionários

function limpar(params) {
    let test = document.getElementById('screen')
    test.innerText = ''
}


function result(params) {
    
}

function Nove(params) {
    let test = document.getElementById('screen')
    test.append('9')
}

function Oito(params) {
    let test = document.getElementById('screen')
    test.append('8')
}

function Sete(params) {
    let test = document.getElementById('screen')
    test.append('7')
}

function Seis(params) {
    let test = document.getElementById('screen')
    test.append('6')
}

function Cinco(params) {
    let test = document.getElementById('screen')
    test.append('5')
}

function Quatro(params) {
    let test = document.getElementById('screen')
    test.append('4')
}

function Tres(params) {
    let test = document.getElementById('screen')
    test.append('3')
}


function Dois(params) {
    let test = document.getElementById('screen')
    test.append('2')
}

function Um(params) {
    let test = document.getElementById('screen')
    test.append('1')
}