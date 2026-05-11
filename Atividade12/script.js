function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function() {
        return (this.base * this.altura).toFixed(2);
    };
}

// Manipulação do formulário do Retângulo
document.getElementById('formRetangulo').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const base = parseFloat(document.getElementById('baseRet').value);
    const altura = parseFloat(document.getElementById('alturaRet').value);
    
    const meuRetangulo = new Retangulo(base, altura);
    const area = meuRetangulo.calcularArea();
    
    const divRes = document.getElementById('resRetangulo');
    divRes.style.display = 'block';
    divRes.innerText = `Objeto Retângulo criado!\nBase: ${base} | Altura: ${altura}\nÁrea Calculada: ${area}`;
});

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numeroConta = numeroConta;
        this._saldo = Number(saldo);
    }

    // Getters e Setters
    get nomeCorrentista() { return this._nomeCorrentista; }
    set nomeCorrentista(valor) { this._nomeCorrentista = valor; }

    get banco() { return this._banco; }
    set banco(valor) { this._banco = valor; }

    get numeroConta() { return this._numeroConta; }
    set numeroConta(valor) { this._numeroConta = valor; }

    get saldo() { return this._saldo; }
    set saldo(valor) { this._saldo = Number(valor); }
}

class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._saldoEspecial = Number(saldoEspecial);
    }

    get saldoEspecial() { return this._saldoEspecial; }
    set saldoEspecial(valor) { this._saldoEspecial = Number(valor); }

    mostrarDados() {
        return `[CONTA CORRENTE]\n` +
               `Titular: ${this.nomeCorrentista}\n` +
               `Banco: ${this.banco}\n` +
               `Conta: ${this.numeroConta}\n` +
               `Saldo: R$ ${this.saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n` +
               `Limite Especial: R$ ${this.saldoEspecial.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    }
}

class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this._juros = Number(juros);
        this._dataVencimento = dataVencimento;
    }

    get juros() { return this._juros; }
    set juros(valor) { this._juros = Number(valor); }

    get dataVencimento() { return this._dataVencimento; }
    set dataVencimento(valor) { this._dataVencimento = valor; }

    mostrarDados() {
        return `[CONTA POUPANÇA]\n` +
               `Titular: ${this.nomeCorrentista}\n` +
               `Banco: ${this.banco}\n` +
               `Conta: ${this.numeroConta}\n` +
               `Saldo: R$ ${this.saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}\n` +
               `Taxa Juros: ${this.juros}%\n` +
               `Vencimento: ${this.dataVencimento}`;
    }
}

// Evento: Conta Corrente
document.getElementById('formCorrente').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cc = new Corrente(
        document.getElementById('nomeC').value,
        document.getElementById('bancoC').value,
        document.getElementById('numC').value,
        document.getElementById('saldoC').value,
        document.getElementById('limiteC').value
    );
    
    const divRes = document.getElementById('resCorrente');
    divRes.style.display = 'block';
    divRes.innerText = cc.mostrarDados();
});

// Evento: Conta Poupança
document.getElementById('formPoupanca').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cp = new Poupanca(
        document.getElementById('nomeP').value,
        document.getElementById('bancoP').value,
        document.getElementById('numP').value,
        document.getElementById('saldoP').value,
        document.getElementById('jurosP').value,
        document.getElementById('vencimentoP').value
    );
    
    const divRes = document.getElementById('resPoupanca');
    divRes.style.display = 'block';
    divRes.innerText = cp.mostrarDados();
});
