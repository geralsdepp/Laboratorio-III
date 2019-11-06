/// <reference path="bye.ts"/>

let mensaje : string = "Hola que tal";
console.log(mensaje);

//array

let vector:number[] = [1,2,3,4];

//Tupla

let tupla :[number, string] = [3, "Batman"];

//enum 
enum EHeroes{
    Batman,
    HombreAraña
}

console.log("Enum..");
//for (const key in EHeroes) {
   /// console.log(key);
//}
//console.log(EHeroes[EHeroes.Batman]);

//Funciones

let funcionEnviarMision = function(heroe : string = "Spiderman") : string{

    return heroe = heroe + " enviado";
}

let retorno : string = funcionEnviarMision();
console.log(retorno);