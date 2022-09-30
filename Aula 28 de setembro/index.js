// let nome = ["Lucas", "Cauan", "Marcia"];
// let telefone = ["99348388", "99849958", "9976999"];
// let cidade = ["Sao Paulo", "Santos", "Santo Andre"];

// for(let i = 0; i < nome.length; i++) {
//     console.log("Nome: " + nome[i] + " | " + "Telefone: " + telefone[i] + " | " + cidade[i]);
// }


// class Contato {
//     constructor(nome, telefone, cidade){
//         this.nome = nome;
//         this.telefone = telefone;
//         this.cidade = cidade;
//         this.email = email;
//     }
//     info(){
//         console.log("Nome: " + this.nome + " | " + "Telefone: " + this.telefone + " | " + this.cidade);
//     }
// }

// let contato01 = new Contato("Lucas", "99348388", "Sao Paulo");
// let contato02 = new Contato("Cauan", "99849958", "Santos");
// let contato03 = new Contato("Marcia", "9976999", "Santo Andre");


// contato01.info();
// contato02.info();
// contato03.info();


// class Veiculo {
//     constructor(ano, marca, modelo, tipo, cor, valor, quantidadeDeRodas, usado){
//         this.ano = ano;
//         this.marca = marca;
//         this.modelo = modelo;
//         this.tipo = tipo;
//         this.cor = cor;
//         this.valor = valor;
//         this.quantidadeDeRodas = quantidadeDeRodas;
//         this.usado = usado;
//     }

//     info(){
//         console.log("Ano............................: ", this.ano);
//         console.log("Marca..........................: ", this.marca);
//         console.log("Modelo.........................: ", this.modelo);
//         console.log("Tipo...........................: ", this.tipo);
//         console.log("Cor............................: ", this.cor);
//         console.log("Valor..........................: ", this.valor);
//         console.log("Quantidade de Rodas............: ", this.quantidadeDeRodas);
//         console.log("Usado..........................: ", this.usado ? "Sim" : "Não");
//     }

// }

// const veiculo01 = new Veiculo("2002", "Chevrolet", "Corsa", "hatch", "Amarelo", 10000, 4, true );

// veiculo01.info();

let pessoas = [];


class Pessoa {

    
    constructor(nome, anoDeNascimento, estadoCivil, horoscopo){
        this.nome = nome;
        this.idade = 2022 - anoDeNascimento;
        this.anoDeNascimento = anoDeNascimento;
        this.estadoCivil = estadoCivil;
        this.horoscopo = horoscopo;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, meu ano de nascimento é ${this.anoDeNascimento}, meu estado civil é ${this.estadoCivil} e meu horoscopo é ${this.horoscopo}`);
    }

    adicionarPessoa() {
        pessoas.push(this);
    }

   

}


const marcia = new Pessoa("Marcia",1993, "Solteira", "Aquário")

marcia.descrever()




