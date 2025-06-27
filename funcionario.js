function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz: oi!");
    }
}
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;
    this.getSalario = function() {
        return _salario;
    }
    this.setSalario = function(valor) {
        if(typeof valor === 'number') {
            _salario = valor;
        }else {
            console.log("Valor inválido para salário.");
        }
    }
    this.aumento = function() {
        const novoSalario = _salario * 1.1;

        
    }
    this.dizCargo = function() {
        console.log(this.cargo);
    }
    Pessoa.call(this, nome);
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "Estagiário", 2000);
    this.aumento = function() {
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        console.log(this.getSalario());
    }
}
const pessoa1 = new Pessoa("João");
const funcionario1 = new Funcionario("Maria", "Desenvolvedora", 5000);
// console.log(pessoa1);
// console.log(funcionario1);

// funcionario1.dizOi();
// funcionario1.dizCargo();
// funcionario1.setSalario(7000);

funcionario1.aumento();
console.log(funcionario1.getSalario());

const estagiario1 = new Estagiario("Pedro");
estagiario1.aumento();
