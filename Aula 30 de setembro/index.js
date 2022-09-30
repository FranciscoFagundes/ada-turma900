class Individuo {

    #cpf;

    constructor(matricula, nome, nascimento, endereco, cpf){
        this.matricula = matricula;
        this.nome = nome;
        this.nascimento = nascimento;
        this.endereco = endereco;
        this.#cpf = cpf;
    }

    info() {
        console.log(this);
    }

    setNome(nome) {
        this.nome = nome;
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        this.#cpf = cpf;
    }


}

let individuo01 = new Individuo("12345", "Lucas", "24/08/1978", "Rua dos Lucas", "123456789-10");











