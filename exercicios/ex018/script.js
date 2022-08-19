let dados = []
console.log(dados.length)
let ilog = document.getElementById('ilog')
let res = document.getElementById('div-res')


function conta() {
    let num = Number(document.getElementById('inum').value)
    console.log(num)
    let log = document.createElement('option')
    let busca = dados.indexOf(num)
    console.log(busca)

    if (num <= 0 || num > 100) {
        window.alert('valor inválido')
    } else if (dados.length > 0 && busca > -1) {
        window.alert(`o valor ${num} já está na lista`)
    } else {
        res.innerHTML = ''
        log.innerText = `o número ${num} foi adicionado.`
        ilog.appendChild(log)
    
        return dados.push(num)
    }
}

function fina() {
    if (dados.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        //peguei do w3schools
        function compareFunction(a, b){return a-b}
        
        dados.sort(compareFunction)
        let tam = dados.length - 1

        res.innerHTML = `<p>Ao todo, temos ${dados.length} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado é ${dados[tam]}</p>`
        res.innerHTML += `<p>O menor valor informado é ${dados[0]}</p>`
    
        let soma = 0
        for (let pos = 0; pos < dados.length; pos++) {
            soma += dados[pos]
        }

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${soma / dados.length}</p>`
        }
}
