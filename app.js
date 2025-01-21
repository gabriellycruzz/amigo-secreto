let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo() {

    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; 
    }

    amigos.push(nome);
    inputAmigo.value = '';
    atualizarLista();
}


function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Seu amigo secreto é: ${amigoSorteado}`;
}

function inicializar() {
    exibirTextoNaTela('#resultado', '');
}

inicializar();