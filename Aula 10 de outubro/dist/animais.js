"use strict";
class Animal {
    constructor(nome, especie, raca, porte, idade, sexo, vacinado, castrado, deficiencia, restricao, personalidade) {
        this.nome = "";
        this.especie = "";
        this.raca = "";
        this.porte = "";
        this.idade = "";
        this.sexo = "";
        this.vacinado = "";
        this.castrado = "";
        this.deficiencia = "";
        this.restricao = "";
        this.personalidade = "";
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
const cadastrarAnimais = () => {
    let nome = document.getElementById("nome").value;
    let especie = document.getElementById("especie").value;
    let raca = document.getElementById("raca").value;
    let porte = document.getElementById("porte").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.getElementById("sexo").value;
    let vacinado = document.getElementById("vacinado").value;
    let castrado = document.getElementById("castrado").value;
    let deficiencia = document.getElementById("deficiencia").value;
    let restricao = document.getElementById("restricaoAlimentar").value;
    let personalidade = document.getElementById("personalidade").value;
    let animal = new Animal(nome, especie, raca, porte, idade, sexo, vacinado, castrado, deficiencia, restricao, personalidade);
    // console.log(animal);
    localStorage.setItem("animal", JSON.stringify(animal));
};
const listarAnimais = () => {
    var _a;
    let animais = "";
    animais = (_a = localStorage.getItem("animal")) === null || _a === void 0 ? void 0 : _a.toString();
    console.log(animais);
};
