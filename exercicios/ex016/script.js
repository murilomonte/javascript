let start = Number(document.getElementById('istart').value)
let end = Number(document.getElementById('iend').value)
let step = Number(document.getElementById('istep').value)

let saida = document.getElementById('div-res')

function contar() {
    if (start.length == 0 || end.length == 0 || step.length == 0) {
        window.alert('impossível contar\nFaltam dados')
    } else {
        if (step <= 0) {
            window.alert(`Impossível utilizar o passo ${step}, utilizando o passo 1`)
            step = 1
        }
        if (start < end) {
            //contagem crescente
            for (let i = start; i <= end; i += step) {
                saida.innerHTML += `${i} >>`
            }
            saida.innerHTML += 'fim'
        } else {
            //contagem decrescente
            for (let i = start; i >= end; i -= step) {
                saida.innerHTML += `${i} >>`
            }
            saida.innerHTML += 'fim'
        }
    }


}