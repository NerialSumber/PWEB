function calcIMC() {
    let altura = parseFloat(document.getElementById("alt").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if(isNaN(altura) || isNaN(peso)) {
        alert("Erro, todos os campos precisam ser respondidos com algum valor numérico");
        return null;
    }
    else if(altura <= 0 || peso <=0)
    {
        alert("Erro, todos os campos númericos precisam ser maiores que 0");
        return null;
    }
        else {
            let result = peso/(Math.pow(altura, 2));
            return result;
        }
}

function resultIMC() {
    let valor = calcIMC().toFixed(1);

    if(valor === null)
        return " ";
    else {
        if(valor < 18.5)
            return alert(`IMC: ${valor} \nClassificação: magreza \nGrau de Obesidade: 0`);
        else if(valor <= 24.9)
            return alert(`IMC: ${valor} \nClassificação: normal \nGrau de Obesidade: 0`);
            else if(valor <= 29.9)
                return alert(`IMC: ${valor} \nClassificação: sobrepeso \nGrau de Obesidade: 1`);
                else if(valor <= 39.9)
                    return alert(`IMC: ${valor} \nClassificação: obesidade \nGrau de Obesidade: 2`);
                    else
                        return alert(`IMC: ${valor} \nClassificação: obesidade grave \nGrau de Obesidade: 3`);
    }
}

function limpar() {
    document.getElementById("alt").value = " ";
    document.getElementById("peso").value = " ";
}