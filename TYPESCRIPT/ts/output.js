"use strict";
/// <reference path="bye.ts"/>
let mensaje = "Hola que tal";
console.log(mensaje);
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
console.log("Enum..");
//for (const key in EHeroes) {
/// console.log(key);
//}
//console.log(EHeroes[EHeroes.Batman]);
//Funciones
let funcionEnviarMision = function (heroe = "Spiderman") {
    return heroe = heroe + " enviado";
};
let retorno = funcionEnviarMision();
console.log(retorno);
/// <reference path="hello.ts"/>
let mens = "Chau";
console.log(mens);
//# sourceMappingURL=output.js.map