"use strict";
/// <reference path="bye.ts"/>
let mensaje = "Hola que tal";
//console.log(mensaje);
//array
let vector = [1, 2, 3, 4];
//Tupla
let tupla = [3, "Batman"];
//enum 
var EHeroes;
(function (EHeroes) {
    EHeroes[EHeroes["Batman"] = 0] = "Batman";
    EHeroes[EHeroes["HombreAra\u00F1a"] = 1] = "HombreAra\u00F1a";
})(EHeroes || (EHeroes = {}));
//console.log("Enum..");
//for (const key in EHeroes) {
/// console.log(key);
//}
//console.log(EHeroes[EHeroes.Batman]);
//Funciones
/*let funcionEnviarMision = function(heroe : string = "Spiderman") : string{

    return heroe = heroe + " enviado";
}*/
//let retorno : string = funcionEnviarMision();
//console.log(retorno);
// PARAMETROS REST
let funcionEnviarMision2 = function (...heroes) {
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado");
    }
};
funcionEnviarMision2("Spiderman", "Batman", "Guason");
//funcion flecha
let funcionEnviarMision3 = (heroe = "Heroe") => {
    return heroe + " enviado a misión 3";
};
console.log(funcionEnviarMision3());
//tipo en el objeto
let flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre", "Viaja en el tiempo"],
    getNombre() {
        return this.nombre;
    }
};
let ironman = {
    nombre: "Tony Stark",
    edad: 24,
    poderes: ["vuela"],
    getNombre: function () { return this.nombre; }
};
console.log(ironman.getNombre());
let Wolverine = {
    nombre: "James",
};
console.log(Wolverine.nombre);
// Interface en clases
class Avenger {
    constructor() {
        this.nombre = "Batman";
    }
}
class Mutante {
    constructor() {
        this.nombre = "un mutante";
    }
}
let unAvenger = new Avenger();
let unMutante = new Mutante();
console.log(unAvenger.nombre);
console.log(unMutante.nombre);
let miFuncion;
miFuncion = (num1, num2) => num1 + num2;
console.log(miFuncion(2, 10));
//clases
class Avenger2 {
    constructor(nombre) {
        this.nombre = "un avanger";
        this.nombre = nombre;
    }
}
let av2 = new Avenger2("Hulk");
console.log(av2.nombre);
//clase con atrib privado
class Avenger3 {
    constructor(nombre, edad) {
        this._nombre = "un avenger";
        this._edad = 0;
        this.mostrar = () => this._nombre;
        this._nombre = nombre;
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
}
let av3 = new Avenger3("Ironman", 30);
console.log("Clases 2: " + av3.mostrar());
av3.edad = 40;
console.log("Clases 2: " + av3.edad);
//Clases con metodos estaticos
class Xmen {
}
Xmen.nombre_de_clase = "Xmen";
console.log("atributo estatico: " + Xmen.nombre_de_clase);
//Herencia
class AvengerHeredado extends Avenger2 {
}
let avh = new AvengerHeredado("Heredado");
console.log(avh.nombre);
/// <reference path="hello.ts"/>
let mens = "Chau";
console.log(mens);
//# sourceMappingURL=output.js.map