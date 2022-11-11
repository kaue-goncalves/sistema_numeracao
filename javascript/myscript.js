var botao_contraste_branco = document.getElementById('branco')
var botao_contraste_preto = document.getElementById('preto')
var todos = document.querySelectorAll('*')
var logo = document.getElementById('logo')
var tamanho = 16

function mudarParaBranco() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'black'
        elemento.style.backgroundColor = 'white'
    })

    logo.src = 'img/logo_dark.png'

    // Mudando a borda dos botões com a classe btn
    var botoes = document.querySelectorAll('.btn')
    botoes.forEach(function(botao){
        botao.style.border = '2px solid #000'
    })
}

botao_contraste_branco.addEventListener('click', mudarParaBranco);

function mudarParaPreto() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'white'
        elemento.style.backgroundColor = 'black'
    })

    logo.src = 'img/logo_light.png'
    
    // Mudando a borda dos botões com a classe btn
    var botoes = document.querySelectorAll('.btn')
    botoes.forEach(function(botao){
        botao.style.border = '2px solid #FFF'
    })
}

botao_contraste_preto.addEventListener('click', mudarParaPreto);


function aumentar(){
    tamanho++
    document.body.style.fontSize=tamanho+"px";
}

function diminuir(){
    tamanho--
    document.body.style.fontSize=tamanho+"px";
}
