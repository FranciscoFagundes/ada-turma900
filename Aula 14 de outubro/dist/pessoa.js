"use strict";
class Pessoa {
    constructor(nome, dataDeNascimento, genero, cpf, endereco, cidade, estado, telefone, email) {
        this.nome = "";
        this.dataDeNascimento = "";
        this.genero = "";
        this.cpf = "";
        this.endereco = "";
        this.cidade = "";
        this.estado = "";
        this.telefone = "";
        this.email = "";
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
    constructor(nome, dataDeNascimento, genero, cpf, endereco, cidade, estado, telefone, email, crmv, formacao, especializacao, turno) {
        super(nome, dataDeNascimento, genero, cpf, endereco, cidade, estado, telefone, email);
        this.crmv = "";
        this.formacao = "";
        this.especializacao = "";
        this.turno = "";
        this.crmv = crmv;
        this.formacao = formacao;
        this.especializacao = especializacao;
        this.turno = turno;
    }
}
const cadastrarVeterinario = () => {
    let nome = document.getElementById("nome").value;
    let dataDeNascimento = document.getElementById("dataDeNascimento").value;
    let genero = document.getElementById("genero").value;
    let cpf = document.getElementById("cpf").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;
    let crmv = document.getElementById("crmv").value;
    let formacao = document.getElementById("formacao").value;
    let especializacao = document.getElementById("especializacao").value;
    let turno = document.getElementById("turno").value;
    let veterinario = new Veterinario(nome, dataDeNascimento, genero, cpf, endereco, cidade, estado, telefone, email, crmv, formacao, especializacao, turno);
    //localStorage.setItem("veterinario", JSON.stringify(veterinario));
    let arrayVeterinarios = [];
    arrayVeterinarios = JSON.parse(localStorage.getItem("listaDeVeterinarios")) ? JSON.parse(localStorage.getItem("listaDeVeterinarios")) : [];
    arrayVeterinarios.push(veterinario);
    localStorage.setItem("listaDeVeterinarios", JSON.stringify(arrayVeterinarios));
};
const listarVeterinario = () => {
    var _a;
    let listaDeVeterinarios = "";
    listaDeVeterinarios = (_a = localStorage.getItem("listaDeVeterinarios")) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(JSON.parse(listaDeVeterinarios));
};
