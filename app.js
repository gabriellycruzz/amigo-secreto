let listaDeAmigos = [];

function exibirTextoNaTela () {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Lista de Amigo Secreto');
    exibirTextoNaTela('p', 'Adicione um amigo para começar!');
}

function adicionarAmigo() {
    let nome = document.querySelector('input').value;

    if (nome == '') {
        exibirTextoNaTela('p', 'Digite um nome válido!');
    } else {
        listaDeAmigos.push(nome);
        exibirTextoNaTela('p', `Amigo ${nome} adicionado!`);
        limparCampo();
    }
}

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

exibirMensagemInicial();