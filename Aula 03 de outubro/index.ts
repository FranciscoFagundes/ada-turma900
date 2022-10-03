class Pessoa{
    nome: string;
    sobrenome: string;
    idade: number | string;

    constructor(nome: string, sobrenome: string, idade: number){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    info() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos de idade`);
    }
}

let pessoa01 = new Pessoa("Joao", "José", 27);

pessoa01.info();