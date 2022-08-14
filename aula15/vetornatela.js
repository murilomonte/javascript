let num = [8, 1, 7, 2, 9]

console.log(num)

/*
for (let i = 0; i <= num.length; i++) {
    console.log(num[i])
} */

// ler se "Para cada 'pos' (varável definida pelo dev) no vetor 'num', faça isso"
for (let pos in num) {
    console.log(num[pos])
}


