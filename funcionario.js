function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz: oi!");
    }
}
function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    this.salario = salario;

    Pessoa.call(this, nome);
}
const pessoa1 = new Pessoa("João");
const funcionario1 = new Funcionario("Maria", "Desenvolvedora", 5000);
console.log(pessoa1);
console.log(funcionario1);