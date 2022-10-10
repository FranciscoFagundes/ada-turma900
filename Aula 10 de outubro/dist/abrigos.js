"use strict";
class Abrigo {
    constructor(nome, endereco, cidade, estado, cep, lotacaoMaxima, lotacaoAtual, horario, anuncio, tipoDeAnimais, estoque, despesaMensal, numeroDeFuncionarios) {
        this.nome = "";
        this.endereco = "";
        this.cidade = "";
        this.estado = "";
        this.cep = "";
        this.lotacaoMaxima = "";
        this.lotacaoAtual = "";
        this.horario = "";
        this.anuncio = "";
        this.tipoDeAnimais = "";
        this.estoque = "";
        this.despesaMensal = "";
        this.numeroDeFuncionarios = "";
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
const cadastrarAbrigo = () => {
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let cep = document.getElementById("cep").value;
    let lotacaoMaxima = document.getElementById("lotacaoMaxima").value;
    let lotacaoAtual = document.getElementById("lotacaoAtual").value;
    let horario = document.getElementById("horario").value;
    let anuncio = document.getElementById("anuncio").value;
    let tipoDeAnimais = document.getElementById("tipoDeAnimais").value;
    let estoque = document.getElementById("estoque").value;
    let despesaMensal = document.getElementById("despesaMensal").value;
    let numeroDeFuncionarios = document.getElementById("numeroDeFuncionarios").value;
    let abrigos = [];
    let abrigo = new Abrigo(nome, endereco, cidade, estado, cep, lotacaoMaxima, lotacaoAtual, horario, anuncio, tipoDeAnimais, estoque, despesaMensal, numeroDeFuncionarios);
    // console.log(abrigo);
    localStorage.setItem("cadastro", JSON.stringify(abrigo));
};
const listarAbrigos = () => {
    var _a;
    let abrigos = "";
    abrigos = (_a = localStorage.getItem("cadastro")) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(abrigos);
};
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
