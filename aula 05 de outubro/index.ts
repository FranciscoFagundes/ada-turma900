// class Pokemon {
//     nome: string = "";
//     elemento: string = "";
//     ataque: number = 0;
//     defesa: number = 0;
//     constructor(nome: string, elemento: string, ataque: number, defesa: number){
//         this.nome = nome;
//         this.elemento = elemento;
//         this.ataque = ataque;
//         this.defesa = defesa;
//     }

//     info(){
//         console.log(`O ${this.nome} é um Pokemon do tipo ${this.elemento}, tem ${this.ataque} pontos de ataque e ${this.defesa} pontos de defesa`);
//     }
// }

// let pokemon01 = new Pokemon("Pikachu", "elétrico", 40, 20);

// pokemon01.info();

//number, string, boolean, string | number

// type AnoDoCarro = number;
// type ModeloDoCarro = string;
// type MarcaDoCarro = string;

// type Carro = {
//     ano: number,
//     modelo: string,
//     marca: string,
//     km?: number,
//     usado?: boolean,
//     cor?: string
// }

// let anoDoMeuCarro: number = 2001;
// let modeloDoMeuCarro: string = "Fusca";
// let marcaDoMeuCarro: string = "Volkswagem";

// let carro: Carro = {
//     ano: anoDoMeuCarro,
//     modelo: modeloDoMeuCarro,
//     marca: marcaDoMeuCarro
// }

// console.log(carro);

// interface Retangulo {
//     base: number,
//     altura: number
// }

// let rentangulo: Retangulo = {
//     base: 10,
//     altura: 20
// }

// //console.log(rentangulo);

// interface RetanguloColorido extends Retangulo{
//     cor: string
// }

// let novoRentanguloColorido: RetanguloColorido = {
//     base: 5,
//     altura: 10,
//     cor: "vermelho"
// }

// console.log(novoRentanguloColorido);

// public private protected readonly


class Pokemon {
    private nome: string = "";
    elemento: string = "";
    ataque: number = 0;
    defesa: number = 0;
    constructor(nome: string, elemento: string, ataque: number, defesa: number){
        this.nome = nome;
        this.elemento = elemento;
        this.ataque = ataque;
        this.defesa = defesa;
    }

    info(){
        console.log(`O ${this.nome} é um Pokemon do tipo ${this.elemento}, tem ${this.ataque} pontos de ataque e ${this.defesa} pontos de defesa`);
    }
    
    get mostrarNome() {
        return this.nome;
    }

    set mudarNome(novoNome: string) {
        this.nome = novoNome;
    }
}

let pokemon01 = new Pokemon("Pikachu", "elétrico", 40, 20);

console.log(pokemon01.mostrarNome);

pokemon01.mudarNome = "Bulbassauro";

console.log(pokemon01.mostrarNome);


//pokemon01.info();
//console.log(pokemon01.nome);

// class PokemonEvoluido extends Pokemon {
//     nivel: number = 1;

//     constructor(nivel: number, nome: string, elemento: string, ataque: number, defesa: number){
//         super(nome, elemento, ataque, defesa);
//         this.nivel = nivel;
//     }

//     infoEvoluido(){
//         console.log(`O ${this.nome} é um Pokemon do tipo ${this.elemento}, tem ${this.ataque} pontos de ataque, ${this.defesa} pontos de defesa e é do nível ${this.nivel}`);
//     }

// }

//let pokemonEvoluido01 = new PokemonEvoluido(2, "Raichu", "elétrico", 60, 40);

//console.log(pokemonEvoluido01.nome);

//pokemonEvoluido01.infoEvoluido();






