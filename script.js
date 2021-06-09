function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if( fano.value.length == 0 || Number (fano.value) > ano){
        alert('Verifique se digitou corretamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('img', 'foto')
            if (fsex[0].checked){
                genero= 'Homem'
            if(idade >=0 && idade <=10){
                // criança
                img.setAttribute('src', 'criancamas.png')
            }else if (idade <=21){
                //jovem
                img.setAttribute('src', 'jovemmas.png')
            }else if (idade <=50){
                //adulto
                img.setAttribute('src', 'adultomas.png')
            }else {
                //idoso
                img.setAttribute('src','idosomas.png' )
            }    
            

        }else if (fsex[1]){
            genero='Mulher'
            if(idade >=0 && idade <10){
                // criança
                img.setAttribute('src', 'criancafem.png')
            }else if (idade <=21){
                //jovem
                img.setAttribute('src','jovemfem.png')
            }else if (idade <=50){
                //adulto
                img.setAttribute('src', 'adultofem.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosofem.png')
            }    
        
        }
        res.style.textAlign ='center'
        res.innerHTML=`Detectamos que é ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}