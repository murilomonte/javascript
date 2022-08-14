let num = [5, 8, 2, 9, 3]

console.log(num)

// adiciona o número 6 na posição 3 do vetor  
num[3] = 6

console.log(num)

// adiciona o número 3 na última posição do array
num.push(3)

console.log(num)

// mostra a quantidade de valores que há no vetor
console.log(num.length)

// coloca todos os elementos do vetor em ordem crescente
num.sort()

console.log(num)

// procura o número '7' dentro da array, caso seja encontrado, será devolvido a posição. Caso contrário, será devolvido '-1'
console.log(num.indexOf(7))