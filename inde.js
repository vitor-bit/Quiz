const botaoEnviar = document.getElementById("botaoEnviar")
const input1 = document.getElementById("perg1")
const input2 = document.getElementById("perg2")
const input3 = document.getElementById("perg3")
const input4 = document.getElementById("perg4")
const input5 = document.getElementById("perg5")
const resultadoTela = document.getElementById("resultado")
const repostaGet1 = localStorage.getItem("reposta1")
const repostaGet2 = localStorage.getItem("reposta2")
const repostaGet3 = localStorage.getItem("reposta3")
const repostaGet4 = localStorage.getItem("reposta4")
const repostaGet5 = localStorage.getItem("reposta5")


const capturarResposta = () => {
    if (input1.value, input2.value, input3.value, input4.value, input5.value != '') {
        localStorage.setItem("reposta1", input1.value)
        localStorage.setItem("reposta2", input2.value)
        localStorage.setItem("reposta3", input3.value)
        localStorage.setItem("reposta4", input4.value)
        localStorage.setItem("reposta5", input5.value)
    } else {
        alert("Preencha todas as perguntas para enviar!!!!")
    }

}

window.onload = () => {validarRespostas()}


const validarRespostas = () => {
    let contagem = 0

    if (repostaGet1 == "1995") {
        contagem++
    }
    if (repostaGet2.toLowerCase() == "windows"){
        contagem++
    }
    if (repostaGet3 == "1994") {
        contagem++
    }
    if (repostaGet4 == "2004") {
        contagem++
    }
    if (repostaGet5 == "2007") {
        contagem++
    }
    
    if (contagem == 0) {
        resultadoTela.innerHTML = "Número de acertos " + 0
    } else {
        
        resultadoTela.innerHTML = "Número de acertos " + contagem

    }
    
}
