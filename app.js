let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nome = inputAmigo.value();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);

    inputAmigo.value = ''; 
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

