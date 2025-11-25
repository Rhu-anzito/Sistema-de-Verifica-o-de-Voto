var idade = 110
if (idade < 16) {
    console.log(`Não volta`)
} else if (idade < 18 || idade >= 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatorio')
}