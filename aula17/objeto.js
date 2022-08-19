let amigo = {
    nome: 'jose',
    sexo: 'M',
    peso: 85.4,
    engordar(p){
        this.peso += p
    }
}
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)
console.log(amigo.nome)