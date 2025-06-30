function Personagem(nome, nivel, pontosVida, forca) {
    this.nome = nome;
    let _nivel = nivel;
    let _pontosVida = pontosVida;
    let _forca = forca;

    this.getNivel = function() {
        return _nivel;
    }
    this.getPontosVida = function() {
        return _pontosVida;
    }
    this.setPontosVida = function(novoPontosVida) {
        _pontosVida = novoPontosVida;
    }
    this.getForca = function() {
        return _forca;
    }
    this.setForca = function(novaForca) {
        _forca = novaForca;
    }
    this.setNivel = function(novoNivel) {
        _nivel = novoNivel;
    }
    this.upar = function(novoNivel, novoPontosVida, novaForca) {
        this.setNivel(novoNivel);
        this.setPontosVida(novoPontosVida)
        this.setForca(novaForca);
    }

    this.atacar = function() {
        console.log(`${this.nome} ataca com força ${_forca}`);
    }
    this.receberAtaque = function(dano) {
        _pontosVida = _pontosVida - dano;
        if (_pontosVida <= 0) {
            console.log(`${this.nome} foi derrotado!`);
        } else {
            console.log(`${this.nome} recebeu ${dano} de dano e agora tem ${_pontosVida} pontos de vida.`);
        }
    }
}

function Guerreiro(nome, nivel, pontosVida, forca, arma, escudo) {
    Personagem.call(this, nome, nivel, pontosVida, forca);
    this.arma = arma;
    this.escudo = escudo;
    this.setArma = function(novaArma) {
        if( typeof novaArma === 'string' && novaArma.length > 0) {
            this.arma = novaArma;
            console.log(`${this.nome} agora está usando a arma: ${this.arma}`);
        }
    }
    this.setEscudo = function(novoEscudo) {
        if (typeof novoEscudo !== 'boolean') {
            console.log('O escudo deve ser um valor booleano.');
            return;
        }else {
            this.escudo = novoEscudo;
        }
        if(escudo === true) {
            console.log(`${this.nome} agora está usando escudo.`);
        }else {
            console.log(`${this.nome} não está usando escudo.`);
        }
    }
    this.defender = function() {
        if (this.escudo === true) {
            console.log(`${this.nome} se defende com o escudo!`);
        } else {
            console.log(`${this.nome} não está usando escudo e não pode se defender!`);
        }
    }

    this.upar = function() {
        const novoNivel = this.getNivel() + 1;
        this.setNivel(novoNivel);
        const novoPontosVida = this.getPontosVida() + 100;
        this.setPontosVida(novoPontosVida);
        const novaForca = this.getForca() + 10;
        this.setForca(novaForca);
    }
    this.exibirInfo = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nível: ${this.getNivel()}`);
        console.log(`Pontos de Vida: ${this.getPontosVida()}`);
        console.log(`Força: ${this.getForca()}`);
        console.log(`Arma: ${this.arma}`);
        console.log(`Escudo: ${this.escudo ? 'Sim' : 'Não'}`);
    }
}

function Mago(nome, nivel, pontosVida, forca, mana, feiticos) {
    Personagem.call(this, nome, nivel, pontosVida, forca);
    this.mana = mana;
    this.feiticos = feiticos;

    this.lancarFeitico = function(feitico) {
        if (this.mana >= 10) {
            console.log(`${this.nome} lança o feitiço: ${feitico}`);
            this.mana -= 10;
        } else {
            console.log(`${this.nome} não tem mana suficiente para lançar o feitiço.`);
        }
    }

    this.meditar = function() {
        this.mana += 20;
        console.log(`${this.nome} recupera mana. Mana atual: ${this.mana}`);
    }

    this.upar = function() {
        const novoNivel = this.getNivel() + 1;
        this.setNivel(novoNivel);
        const novoPontosVida = this.getPontosVida() + 50;
        this.setPontosVida(novoPontosVida);
        const novaForca = this.getForca() + 5;
        this.setForca(novaForca);
        const novaMana = this.mana + 20;
        this.mana = novaMana;
    }
    this.exibirInfo = function() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Nível: ${this.getNivel()}`);
        console.log(`Pontos de Vida: ${this.getPontosVida()}`);
        console.log(`Força: ${this.getForca()}`);
        console.log(`Mana: ${this.mana}`);
        console.log(`Feitiços: ${this.feiticos.join(', ')}`);
    }
}

const guerreiro = new Guerreiro('Conan', 1, 100, 15, 'Espada', true);
console.log(guerreiro.exibirInfo());
guerreiro.upar();
guerreiro.setArma('Machado');
guerreiro.setEscudo(false);
guerreiro.atacar();
guerreiro.receberAtaque(20);

console.log(guerreiro.exibirInfo());

const mago = new Mago('Gandalf', 1, 80, 10, 50, ['Bola de Fogo', 'Relâmpago']);
console.log(mago.exibirInfo());
mago.upar();
mago.lancarFeitico('Bola de Fogo'); 
mago.meditar();
console.log(mago.exibirInfo());

const Gerreiro2 = new Guerreiro('Thor', 1, 120, 20, 'Martelo', true);
console.log(Gerreiro2.exibirInfo());