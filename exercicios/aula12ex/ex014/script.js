let dia = new Date()
let diaHora = dia.getHours()

let divImg = document.getElementById('div-imagem')
let divHora = document.getElementById('div-horario')

divHora.innerHTML = `<p>Agora são ${diaHora} horas`
if (diaHora < 12) {
    divImg.innerHTML = `<img src="teste.jpeg">`
} else if (diaHora < 18) {
    
} else {

}