// seleciona a iamgem pelo id e adicione um evento de clique e nesse evento cria uma função para toda vez que for clicado a imagem
document.getElementById('eye').addEventListener('click', function(){

    let resultInput = document.getElementById('password'); //recebe o valor do input(o que foi digitado) e coloca na variavel resultInput
    let type = resultInput.getAttribute('type') === 'password' ? 'text' : 'password'; //analisa qual o tipo de input (Ex: <input type="password">) analisa se o tipo seria 'password' nesse exemplo
    //apos a analise ele compara que se for 'password' muda para text, e vice e versa. o sinal de ? serve para substituir o if e else em casos simples como este, que so compara o tipo e muda se for diferente 

    resultInput.setAttribute('type', type); // aqui faz para voltar ao tipo inicial do input, ou seja, so desfaz a ação que foi feita a cima
})