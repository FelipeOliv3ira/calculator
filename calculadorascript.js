var input1 = document.getElementsByName ("input1")
var input2 = document.getElementsByName ("input2")

var resultado = document.getElementById ("resultado")

var zerarBtn = document.getElementsByName ("zerar")
var restoBtn = document.getElementsByName ("resto")
var dividirBtn = document.getElementsByName ("dividir")
var somarBtn = document.getElementsByName ("soma")
var subBtn = document.getElementsByName ("sub")
var multiBtn = document.getElementsByName ("multi")

zerarBtn.item(0).addEventListener ("click", function () {
    input1.item(0).value =""
    input2.item(0).value =""
    resultado.innerText = "RESULTADO :: 0"
})

restoBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) % parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})

dividirBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) / parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})

somarBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) + parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})

subBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) - parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})

multiBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) * parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})

somarBtn.item(0).addEventListener ("click", function () {
    valor = parseInt(input1.item(0).value) + parseInt (input2.item(0).value)
    alterarResultado (valor.toString ())
})


function alterarResultado  (valor) {
    input1.item(0).value = valor
    resultado.innerText = "RESULTADO :: " + valor
}