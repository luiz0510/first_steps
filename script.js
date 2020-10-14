//funçao entrar
function entrar(){
    
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');

    if(texto == '' || texto == null){
        alert('Digite o seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    } 
    
    else{
        area.innerHTML = 'Bem vindo' + ' ' + texto;
    }



}