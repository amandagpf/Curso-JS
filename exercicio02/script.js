function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            sexo = 'Homem'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'homemcrianca.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        }else if(fsex[1].checked){
            sexo = 'Mulher'
            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'mulhercrianca.png')
            }else if(idade < 25){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if(idade < 55){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else{
                //idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        } 
        res.getElementsByClassName.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos.` 
        res.appendChild(img)
    }
}