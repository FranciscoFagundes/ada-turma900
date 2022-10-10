class Abrigo {
    nome: string = "";
    endereco: string = "";
    cidade: string = "";
    estado: string = "";
    cep: string = "";
    lotacaoMaxima: string = "";
    lotacaoAtual: string = "";
    horario: string = "";
    anuncio: string = "";
    tipoDeAnimais: string = "";
    estoque: string = "";
    despesaMensal: string = "";
    numeroDeFuncionarios: string = "";
    constructor(
        nome: string,
        endereco: string,
        cidade: string,
        estado: string,
        cep: string,
        lotacaoMaxima: string,
        lotacaoAtual: string,
        horario: string,
        anuncio: string,
        tipoDeAnimais: string,
        estoque: string,
        despesaMensal: string,
        numeroDeFuncionarios: string 
        ) {
            this.nome = nome;
            this.endereco = endereco;
            this.cidade = cidade;
            this.estado = estado;
            this.cep = cep;
            this.lotacaoMaxima = lotacaoMaxima;
            this.lotacaoAtual = lotacaoAtual;
            this.horario = horario;
            this.anuncio = anuncio;
            this.tipoDeAnimais = tipoDeAnimais;
            this.estoque = estoque;
            this.despesaMensal = despesaMensal;
            this.numeroDeFuncionarios = numeroDeFuncionarios;
        }
}

const cadastrarAbrigo = (): void => {
    let nome: string = (<HTMLInputElement>document.getElementById("nome")).value;
    let endereco: string = (<HTMLInputElement>document.getElementById("endereco")).value;
    let cidade: string = (<HTMLInputElement>document.getElementById("cidade")).value;
    let estado: string = (<HTMLInputElement>document.getElementById("estado")).value;
    let cep: string = (<HTMLInputElement>document.getElementById("cep")).value;
    let lotacaoMaxima: string = (<HTMLInputElement>document.getElementById("lotacaoMaxima")).value;
    let lotacaoAtual: string = (<HTMLInputElement>document.getElementById("lotacaoAtual")).value;
    let horario: string = (<HTMLInputElement>document.getElementById("horario")).value;
    let anuncio: string = (<HTMLInputElement>document.getElementById("anuncio")).value;
    let tipoDeAnimais: string = (<HTMLInputElement>document.getElementById("tipoDeAnimais")).value;
    let estoque: string = (<HTMLInputElement>document.getElementById("estoque")).value;
    let despesaMensal: string = (<HTMLInputElement>document.getElementById("despesaMensal")).value;
    let numeroDeFuncionarios: string = (<HTMLInputElement>document.getElementById("numeroDeFuncionarios")).value;

    let abrigos: string[] = [];


    let abrigo = new Abrigo(nome,
                            endereco,
                            cidade, 
                            estado, 
                            cep,
                            lotacaoMaxima,
                            lotacaoAtual,
                            horario,
                            anuncio,
                            tipoDeAnimais,
                            estoque,
                            despesaMensal,
                            numeroDeFuncionarios);

   // console.log(abrigo);

   localStorage.setItem("cadastro", JSON.stringify(abrigo));
}

const listarAbrigos = (): void => {
    let abrigos: any = "";

    abrigos = localStorage.getItem("cadastro")?.toString();

    console.log(abrigos);
}

























// let abrigo01 = new Abrigo("Abrigo da Carol",
//                           "Rua da Carol nº 01",
//                           "Santo André", "SP", 
//                           "00000-000",
//                           "100",
//                           "30",
//                           "8:00-18:00",
//                           "Evento Primavera",
//                           "cachorro",
//                           "50%",
//                           "30.000",
//                           "5"
//                           );

// console.log(abrigo01);