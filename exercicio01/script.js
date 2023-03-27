function carregar (){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cumprimento = document.getElementById('cumprimento')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = './imagens/manha.png'
        document.body.style.background = '#D48F36'
        cumprimento.innerHTML = `BOM DIA!`
    }else if(hora >= 12 && hora < 18){
        //boa tarde
        img.src = './imagens/tarde.png'
        document.body.style.background = '#C32900'
        cumprimento.innerHTML = `BOA TARDE!`
    }else{
        //boa noite
        img.src = './imagens/noite.png'
        document.body.style.background = '#0F459C'
        cumprimento.innerHTML = `BOA NOITE!`
    }
}

