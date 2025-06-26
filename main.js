const carroDoJoao = {
    modelo : "fiesta",
    marca : "ford",
    anoModelo : 2020,
    AnoFabricacao : 2019,
    acelear : function() {
        console.log("Acelerando...");
    }
}

const carroDaMaria = {
    modelo : "civic",
    marca : "honda",
    anoModelo : 2021,
    AnoFabricacao : 2020,
    acelear : function() {
        console.log("Acelerando...");
    }
}

function Carro (modelo, marca, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.marca = marca;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log("Acelerando...");
    }
}

const carroDoJoao2 =new Carro('fiesta', 'ford', 2020, 2019);
const carroDaMaria2 = new Carro('civic', 'honda', 2021, 2020);
console.log(carroDoJoao2);
console.log(carroDaMaria2);

const nome = "Matheus";
const idade = 26;
const ehMaiorDeIdade = true;
const conhecimentos = ["JavaScript", "HTML", "CSS"];
const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos
}

// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof ehMaiorDeIdade);
// console.log(typeof conhecimentos);
// console.log(typeof pessoa);

// console.log(carroDaMaria2 instanceof Carro);
// console.log(conhecimentos instanceof Array);

console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibirNome(nomeAtributo) {
    console.log(pessoa[nomeAtributo]);
}

exibirNome('nome');

pessoa.sobrenome = null;
Object.freeze(pessoa);
pessoa.nome = 'Felipe';

if (pessoa.sobrenome) {
    console.log("Sobrenome existe");
}else {
    console.log("Sobrenome não existe");
}

if ('sobrenome' in pessoa) {
    console.log("Tem sobrenome");
}

console.log(pessoa.nome);

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));