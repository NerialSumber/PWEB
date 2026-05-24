let nome = prompt("Qual é o seu nome?");
let nota1 = prompt("Qual é a 1° nota?");
let nota2 = prompt("Qual é a 2° nota?");
let nota3 = prompt("Qual é a 3° nota?");
let nota4 = prompt("Qual é a 4° nota?");

function media() {
    let notaTotal = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4;
    return notaTotal;
};

alert("Nome: " + nome + "\nA média das notas é: " + media());