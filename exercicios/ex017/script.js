function gerTabuada() {
    var num = Number(document.getElementById('inum').value)
    console.log(num)
    var tabuada = document.getElementById('itabuada')
    if (num == 0 || num.length == 0) {
        window.alert('digite um numero.')
    } else {
        tabuada.innerHTML = ''
        for (let i = 1; i <= 10; i++) {
            let res = num * i
            console.log(`${num} x ${i} = ${res}`)
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text = `${num} x ${i} = ${res}`
            tabuada.appendChild(item)
        } 
    }
}