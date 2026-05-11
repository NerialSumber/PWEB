const h1Estado = document.getElementById('estadoJanela');
const imgJanela = document.getElementById('imagemJanela');

let isBroken = false;

function fecharJanela() {
    if (!isBroken) {
        imgJanela.src = 'Janela fechada.png';
        h1Estado.innerText = 'Janela Fechada';
    }
}

function abrirJanela() {
    if (!isBroken) {
        imgJanela.src = 'Janela Aberta.png';
        h1Estado.innerText = 'Janela Aberta';
    }
}

function quebrarJanela() {
    isBroken = true; // Trava o estado para quebrada
    imgJanela.src = 'Janela Quebrada.png';
    h1Estado.innerText = 'Janela Quebrada';
    imgJanela.style.cursor = 'default';
}

imgJanela.addEventListener('mouseover', abrirJanela);
imgJanela.addEventListener('mouseout', fecharJanela);
imgJanela.addEventListener('click', quebrarJanela);