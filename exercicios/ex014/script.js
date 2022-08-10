let dia = new Date()
let diaHora = dia.getHours()

let divImg = document.getElementById('imagem')
let divHora = document.getElementById('horario')

divHora.innerHTML = `<p>Agora são ${diaHora} horas</p>`
if (diaHora < 12) {
    //#4d5e2a
    document.body.style = `background-color: #4d5e2a;`
    divImg.src = `foto-manha.jpg`
} else if (diaHora < 18) {
    //#fdcb98
    divImg.src = `foto-tarde.jpg`
    document.body.style = `background-color: #fdcb98;`
} else {
    //#997eb5
    divImg.src = `foto-noite.jpg`
    document.body.style = `background-color: #997eb5;`
}