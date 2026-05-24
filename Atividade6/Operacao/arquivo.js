let num1 = prompt("Digite o 1° número: ");
let num2 = prompt("Digite o 2° número: ");

function soma() {
    let add = parseFloat(num1) + parseFloat(num2);
    return add;
}

function subtracao() {
    let sub = parseFloat(num1) - parseFloat(num2);
    return sub;
}

function produto() {
    let prod = parseFloat(num1) * parseFloat(num2);
    return prod;
}

function divisao() {
    let div = parseFloat(num1) / parseFloat(num2);
    return div;
}

function restoDivisao() {
    let resto = parseFloat(num1) % parseFloat(num2);
    return resto;
}

alert("1° número: " + num1 + "\n2° número: " + num2 + "\n\nSoma: " + 
      soma() + "\nSubtração: " + subtracao() + "\nProduto: " + produto() + "\nDivisão: " + 
      divisao() + "\nResto da divisão: " + restoDivisao());