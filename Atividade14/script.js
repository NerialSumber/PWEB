const campoTexto = document.getElementById('meuTexto');
const radioMaiuscula = document.getElementById('btnMaiuscula');
const radioMinuscula = document.getElementById('btnMinuscula');

radioMaiuscula.addEventListener('change', function() {
    if (radioMaiuscula.checked) {
        campoTexto.value = campoTexto.value.toUpperCase();
    }
});

radioMinuscula.addEventListener('change', function() {
    if (radioMinuscula.checked) {
        campoTexto.value = campoTexto.value.toLowerCase();
    }
});