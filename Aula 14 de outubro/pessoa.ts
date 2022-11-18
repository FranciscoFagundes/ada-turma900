class Pessoa {
    nome: string = "";
    dataDeNascimento: string = "";
    genero: string = "";
    cpf: string = "";
    endereco: string = "";
    cidade: string = "";
    estado: string = "";
    telefone: string = "";
    email: string = "";
    constructor(
        nome: string,
        dataDeNascimento: string,
        genero: string,
        cpf: string,
        endereco: string,
        cidade: string,
        estado: string,
        telefone: string,
        email: string
    ) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.genero = genero;
        this.cpf = cpf;
        this.endereco = endereco;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
        this.email = email;
    }
}

class Veterinario extends Pessoa {
    crmv: string = "";
    formacao: string = "";
    especializacao: string = "";
    turno: string = "";

    constructor(
        nome: string,
        dataDeNascimento: string,
        genero: string,
        cpf: string,
        endereco: string,
        cidade: string,
        estado: string,
        telefone: string,
        email: string,
        crmv: string,
        formacao: string,
        especializacao: string,
        turno: string
    ) {
        super(nome, dataDeNascimento, genero, cpf, endereco, cidade, estado, telefone, email);

        this.crmv = crmv;
        this.formacao = formacao;
        this.especializacao = especializacao;
        this.turno = turno;

    }

}



const cadastrarVeterinario = (): void => {
    let nome: string = (<HTMLInputElement>document.getElementById("nome")).value;
    let dataDeNascimento: string = (<HTMLInputElement>document.getElementById("dataDeNascimento")).value;
    let genero: string = (<HTMLInputElement>document.getElementById("genero")).value;
    let cpf: string = (<HTMLInputElement>document.getElementById("cpf")).value;
    let endereco: string = (<HTMLInputElement>document.getElementById("endereco")).value;
    let cidade: string = (<HTMLInputElement>document.getElementById("cidade")).value;
    let estado: string = (<HTMLInputElement>document.getElementById("estado")).value;
    let telefone: string = (<HTMLInputElement>document.getElementById("telefone")).value;
    let email: string = (<HTMLInputElement>document.getElementById("email")).value;
    let crmv: string = (<HTMLInputElement>document.getElementById("crmv")).value;
    let formacao: string = (<HTMLInputElement>document.getElementById("formacao")).value;
    let especializacao: string = (<HTMLInputElement>document.getElementById("especializacao")).value;
    let turno: string = (<HTMLInputElement>document.getElementById("turno")).value;


    let veterinario = new Veterinario(nome,
        dataDeNascimento,
        genero,
        cpf,
        endereco,
        cidade,
        estado,
        telefone,
        email,
        crmv,
        formacao,
        especializacao,
        turno
    );
    
    //localStorage.setItem("veterinario", JSON.stringify(veterinario));

    let arrayVeterinarios: object[] = [];

    arrayVeterinarios = JSON.parse(localStorage.getItem("listaDeVeterinarios")!) ? JSON.parse(localStorage.getItem("listaDeVeterinarios")!) : [];

    arrayVeterinarios.push(veterinario);

    localStorage.setItem("listaDeVeterinarios", JSON.stringify(arrayVeterinarios));





}

const listarVeterinario = (): void => {
    let listaDeVeterinarios: any = "";

    listaDeVeterinarios = localStorage.getItem("listaDeVeterinarios")?.toString();

    console.log(JSON.parse(listaDeVeterinarios));
}



