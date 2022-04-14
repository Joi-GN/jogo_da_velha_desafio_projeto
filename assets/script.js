let jogador, vencedor = null;
let listaQuadradosPreenchidos = [];
const quadrados = document.querySelectorAll('.quadrado');
const jogadorAtual = document.getElementById('jogador');

mudarJogador('X');

quadrados.forEach((quadrado) => {
    quadrado.onclick = escolheQuadrado;
});

function escolheQuadrado() {
    if (vencedor !== null){
        return;
    }
    
    if (this.innerHTML !== '-') {
        return;
    }

    this.innerHTML = jogador;
    this.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
    checarQuadradosPreenchidos(this);
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorAtual.innerHTML = `Vez do jogador: ${jogador}`;
}

function checarVencedor() {

    const quad1 = document.getElementById(1);
    const quad2 = document.getElementById(2);
    const quad3 = document.getElementById(3);
    const quad4 = document.getElementById(4);
    const quad5 = document.getElementById(5);
    const quad6 = document.getElementById(6);
    const quad7 = document.getElementById(7);
    const quad8 = document.getElementById(8);
    const quad9 = document.getElementById(9);

    if (checarSequencia(quad1, quad2, quad3)) {
        mudarCorQuadrado(quad1, quad2, quad3);
        gameOver(quad1);
    }
    if (checarSequencia(quad4, quad5, quad6)) {
        mudarCorQuadrado(quad4, quad5, quad6);
        gameOver(quad4);
    }
    if (checarSequencia(quad7, quad8, quad9)) {
        mudarCorQuadrado(quad7, quad8, quad9);
        gameOver(quad7);
    }
    if (checarSequencia(quad1, quad4, quad7)) {
        mudarCorQuadrado(quad1, quad4, quad7);
        gameOver(quad1);
    }
    if (checarSequencia(quad2, quad5, quad8)) {
        mudarCorQuadrado(quad2, quad5, quad8);
        gameOver(quad2);
    }
    if (checarSequencia(quad3, quad6, quad9)) {
        mudarCorQuadrado(quad3, quad6, quad9);
        gameOver(quad3);
    }
    if (checarSequencia(quad1, quad5, quad9)) {
        mudarCorQuadrado(quad1, quad5, quad9);
        gameOver(quad1);
    }
    if (checarSequencia(quad3, quad5, quad7)) {
        mudarCorQuadrado(quad3, quad5, quad7);
        gameOver(quad3);
    }
}

function checarSequencia(quad1, quad2, quad3) {
    let sequencia = false;

    if (quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML) {
        sequencia = true;
    }

    return sequencia;
}

function mudarCorQuadrado(quad1, quad2, quad3) {
    quad1.style.background = 'limegreen';
    quad2.style.background = 'limegreen';
    quad3.style.background = 'limegreen';
}

function gameOver(quad) {
    vencedor = quad;
    jogadorAtual.innerHTML = `🏆 Vencedor foi ${quad.innerHTML} 🏆 <br> <button onclick="reiniciar()">Jogar Novamente</button>`;
}

function reiniciar() {
    vencedor = null;
    listaQuadradosPreenchidos = [];

    for (let i = 1; i <= quadrados.length; i++) {
        let quadrado = document.getElementById(i);
        quadrado.innerHTML = '-';
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
    }

    mudarJogador('X');
}

function checarQuadradosPreenchidos(quad) {
    listaQuadradosPreenchidos.push(quad);

    if (listaQuadradosPreenchidos.length === quadrados.length) {
        gameOverSemVencedor();
    }
}

function gameOverSemVencedor() {
    jogadorAtual.innerHTML = `Empate! <br>😥 Não houve vencedor <br> <button onclick="reiniciar()">Jogar Novamente</button>`;
}