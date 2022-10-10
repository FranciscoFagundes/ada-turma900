class Animal {
    nome: string = "";
    especie: string = "";
    raca: string = "";
    porte: string = "";
    idade: string = "";
    sexo: string = "";
    vacinado: string = "";
    castrado: string = "";
    deficiencia: string = "";
    restricao: string = "";
    personalidade: string = "";
    constructor(
        nome: string,
        especie: string,
        raca: string,
        porte: string,
        idade: string,
        sexo: string,
        vacinado: string,
        castrado: string,
        deficiencia: string,
        restricao: string,
        personalidade: string
        ) {
            this.nome = nome;
            this.especie = especie;
            this.raca = raca;
            this.porte = porte;
            this.idade = idade;
            this.sexo = sexo;
            this.vacinado = vacinado;
            this.castrado = castrado;
            this.deficiencia = deficiencia;
            this.restricao = restricao;
            this.personalidade = personalidade; 
        }
}

const cadastrarAnimais = (): void => {
    let nome: string = (<HTMLInputElement>document.getElementById("nome")).value;
    let especie: string = (<HTMLInputElement>document.getElementById("especie")).value;
    let raca: string = (<HTMLInputElement>document.getElementById("raca")).value;
    let porte: string = (<HTMLInputElement>document.getElementById("porte")).value;
    let idade: string = (<HTMLInputElement>document.getElementById("idade")).value;
    let sexo: string = (<HTMLInputElement>document.getElementById("sexo")).value;
    let vacinado: string = (<HTMLInputElement>document.getElementById("vacinado")).value;
    let castrado: string = (<HTMLInputElement>document.getElementById("castrado")).value;
    let deficiencia: string = (<HTMLInputElement>document.getElementById("deficiencia")).value;
    let restricao: string = (<HTMLInputElement>document.getElementById("restricaoAlimentar")).value;
    let personalidade: string = (<HTMLInputElement>document.getElementById("personalidade")).value;
    

    let animal = new Animal(nome,
                            especie,
                            raca, 
                            porte, 
                            idade,
                            sexo,
                            vacinado,
                            castrado,
                            deficiencia,
                            restricao,
                            personalidade,
                            );

   // console.log(animal);

   localStorage.setItem("animal", JSON.stringify(animal));
}

const listarAnimais = (): void => {
    let animais: any = "";

    animais = localStorage.getItem("animal")?.toString();

    console.log(animais);
}
