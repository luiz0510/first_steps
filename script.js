//funçao refresh1
function refresh1(){
 window.location.href = window.location.href;
}

//funçao entrar e entrar2
function entrar(){
    
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome?');

    if(texto == '' || texto == null){
        alert('Digite o seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo' + ' ' + texto;
    }
}

function entrar2(nome){
 
    var area2 = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome!');

    if(texto == '' || texto == null){
        alert('Digite seu sobrenome novamente!!!!');
        area2.innerHTML = 'Escreva o sobrenome';
    }else{
        area2.innerHTML = 'Bem vindo' + ' ' + nome + ' ' + texto;
    }

//funçao age
function age(){
    
    var age = document.getElementById('age');
    var texto = prompt('Digite sua idade!');

    age.innerHTML = "Luiz Eduardo tem" + ' ' + age; 

    


}
    


}
