let anoAtual = new Date().getFullYear()
let saida = document.getElementById('div-res')
let img = document.createElement('img')
//let img = document.getElementById('div-res-img')
img.setAttribute('id', 'foto')


function idadeSex() {
    let sex = document.getElementsByName('sex')
    let ano = document.getElementById('inasc').value
 
    let idade = anoAtual - ano

    if (ano > anoAtual || ano.length == 0) {
        console.log('sus')
        window.alert('Data inválida. Verifique os dados e tente novamente.')
    } else {
        if (sex[0].checked) {
            var genero = 'masculino'
            if (idade < 10) {
                //criança
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-bebe-menino.jpg')

            } else if (idade < 21) {
                //jovem
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-jovem-homem.jpg')

            } else if (idade < 50) {
                //adulto
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-homem-adulto.jpg')

            } else {
                //idoso
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-homem-idoso.jpg')

            }
        } else if (sex[1].checked) {
            var genero = 'feminino'
            if (idade < 10) {
                //criança
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-bebe-menina.jpg')

            } else if (idade < 21) {
                //jovem
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-jovem-mulher.jpg')

            } else if (idade < 50) {
                //adulto
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-mulher-adulta.jpg')

            } else {
                //idoso
                console.log(`${genero} com ${idade} anos`)
                img.setAttribute('src', 'imagens/foto-mulher-idosa.jpg')

            }
            
        }
    }
    saida.style.textAlign = 'center'
    saida.innerHTML = `<p>${genero} com ${idade} anos</p>`
    saida.appendChild(img)
    
}
