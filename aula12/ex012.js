var agora = new Date()
var diaSem = agora.getDay()
/*
 0 = domingo
 1 = segunda
 2 = terça 
 ... etc
 */

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO!] Dia da semana inválido.')

}


var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log("Bom dia!")
}else if(hora <= 18 ){
    console.log("Boa tarde")
}else {
    console.log("Boa noite!")
}

var idade = 17 
console.log(`Você tem ${idade} anos.`)
if(idade < 16){
    console.log('Não vota!')
}else if(idade < 18 || idade > 65){
    console.log('O seu voto é opcional')
}else{
    console.log('Seu voto é obrigatório!')
}