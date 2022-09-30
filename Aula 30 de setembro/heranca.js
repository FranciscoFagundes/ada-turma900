class Carro {
    constructor(marca, cor) {
        this.marca = marca;
        this.cor = cor;
    }

    infoMarca(){
        return 'Eu tenho um ' + this.marca;
    }
}

class Modelo extends Carro {
    constructor(marca, modelo, cor){
        super(marca, cor);
        this.modelo = modelo;
    }

    infoMarcaModelo() {
        console.log(this.infoMarca() + ' , modelo ' + this.modelo + ', cor ' + this.cor);
    }
}

let meuCarro = new Modelo("Volkswagem", "Fusca", "Laranja");

meuCarro.infoMarcaModelo();