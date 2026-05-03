function jogar(escolhaUsuario) {

    const numAleatorio = Math.random();
    let escolhaComputador;

    if (numAleatorio <= 0.33) {
        escolhaComputador = 'pedra';
    } else if (numAleatorio <= 0.66) {
        escolhaComputador = 'papel';
    } else {
        escolhaComputador = 'tesoura';
    }

    let fraseResultado = "";
    let quemVenceu = "";

    if (escolhaUsuario === escolhaComputador) {
        fraseResultado = "Empate.";
        quemVenceu = "Ninguém pontuou!";
    } else {

        if (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') {
            fraseResultado = "Pedra quebra tesoura.";
            quemVenceu = "Você Venceu! 🎉";
        } else if (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel') {
            fraseResultado = "Tesoura corta papel.";
            quemVenceu = "Você Venceu! 🎉";
        } else if (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') {
            fraseResultado = "Papel cobre a pedra.";
            quemVenceu = "Você Venceu! 🎉";
        } 
        else if (escolhaComputador === 'pedra' && escolhaUsuario === 'tesoura') {
            fraseResultado = "Pedra quebra tesoura.";
            quemVenceu = "O Computador Venceu! 🤖";
        } else if (escolhaComputador === 'tesoura' && escolhaUsuario === 'papel') {
            fraseResultado = "Tesoura corta papel.";
            quemVenceu = "O Computador Venceu! 🤖";
        } else if (escolhaComputador === 'papel' && escolhaUsuario === 'pedra') {
            fraseResultado = "Papel cobre a pedra.";
            quemVenceu = "O Computador Venceu! 🤖";
        }
    }

    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `
        <div style="font-size: 1.2rem; color: #e74c3c; font-weight: bold;">${fraseResultado}</div>
        <div style="font-size: 1.5rem; color: #2c3e50; margin: 10px 0;">${quemVenceu}</div>
        <div class="detalhes">
            Você escolheu <strong>${escolhaUsuario}</strong> e o computador <strong>${escolhaComputador}</strong>.
            <br><small>(Número sorteado: ${numAleatorio.toFixed(4)})</small>
        </div>
    `;
}
