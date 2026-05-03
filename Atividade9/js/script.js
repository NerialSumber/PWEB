// 1) 
function maiorNumero(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

// 2) 
function ordenarNumeros(n1, n2, n3) {
    let numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b); 
    return numeros.join(", ");
}

// 3) 
function verificarPalindromo(texto) {
    let stringFormatada = texto.toLowerCase().replace(/\s+/g, '');
    let stringReversa = stringFormatada.split('').reverse().join('');
    
    if (stringFormatada === stringReversa) {
        return "É palíndromo";
    } else {
        return "Não é palíndromo";
    }
}

// 4) 
function verificarSubconjunto(palavra1, palavra2) {
    if (palavra1 === "" || palavra2 === "" || palavra1 === undefined || palavra2 === undefined) {
        return "erro";
    }
    if (palavra1.includes(palavra2)) {
        return "é um subconjunto";
    } else {
        return "não é um subconjunto";
    }
}

// 5) 
function diaDaSemana(dataString) {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    let data = new Date(dataString);
    data.setMinutes(data.getMinutes() + data.getTimezoneOffset());
    
    return dias[data.getDay()];
}


function executarMaior() {
    let n1 = Number(document.getElementById("c1_n1").value);
    let n2 = Number(document.getElementById("c1_n2").value);
    let n3 = Number(document.getElementById("c1_n3").value);
    
    document.getElementById("res1").innerText = maiorNumero(n1, n2, n3);
}

function executarOrdem() {
    let n1 = Number(document.getElementById("c2_n1").value);
    let n2 = Number(document.getElementById("c2_n2").value);
    let n3 = Number(document.getElementById("c2_n3").value);
    
    document.getElementById("res2").innerText = ordenarNumeros(n1, n2, n3);
}

function executarPalindromo() {
    let texto = document.getElementById("c3_texto").value;
    document.getElementById("res3").innerText = verificarPalindromo(texto);
}

function executarSubconjunto() {
    let p1 = document.getElementById("c4_p1").value;
    let p2 = document.getElementById("c4_p2").value;
    document.getElementById("res4").innerText = verificarSubconjunto(p1, p2);
}

function executarData() {
    let dataEscolhida = document.getElementById("c5_data").value;
    if (dataEscolhida === "") {
        document.getElementById("res5").innerText = "Por favor, selecione uma data.";
    } else {
        document.getElementById("res5").innerText = diaDaSemana(dataEscolhida);
    }
}