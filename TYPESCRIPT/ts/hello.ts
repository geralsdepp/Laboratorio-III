/// <reference path="bye.ts"/>

let mensaje : string = "Hola que tal";
//console.log(mensaje);

//array

let vector:number[] = [1,2,3,4];

//Tupla

let tupla :[number, string] = [3, "Batman"];

//enum 
enum EHeroes{
    Batman,
    HombreAraña
}

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

let funcionEnviarMision2 = function(...heroes:string[]):void{
    for (let i = 0; i < heroes.length; i++) {
        console.log(heroes[i] + " enviado");
        
    }
}

funcionEnviarMision2("Spiderman", "Batman", "Guason");

//funcion flecha

let funcionEnviarMision3 = (heroe: string = "Heroe"):string=>{
    return heroe + " enviado a misión 3";
}

console.log(funcionEnviarMision3());

//tipo en el objeto

let flash:{nombre: string, edad: number, poderes:string[], getNombre:()=>string} = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Corre", "Viaja en el tiempo"],
    getNombre(){
        return this.nombre;
    }
}

//tipo personalizado

type Heroe = {nombre: string, edad:number, poderes:string[], getNombre:()=>string};
let ironman:Heroe = {
    nombre: "Tony Stark",
    edad: 24,
    poderes: ["vuela"],
    getNombre:function(){return this.nombre;}
}
console.log(ironman.getNombre());

//Interfaces
interface IHeroe{
    nombre: string,
    poder?:string,
    mostrar?():string
}

let Wolverine:IHeroe = {
    nombre: "James",

}

console.log(Wolverine.nombre);

// Interface en clases

class Avenger implements IHeroe{
    nombre: string = "Batman"
}

class Mutante implements IHeroe{
    nombre:string = "un mutante"
}

let unAvenger = new Avenger();
let unMutante = new Mutante();

console.log(unAvenger.nombre);
console.log(unMutante.nombre);

//interface en funcion

interface IfuncDosNumeros{
    (num1:number, num2:number):number;
}

let miFuncion: IfuncDosNumeros;
miFuncion = (num1:number, num2:number)=>num1+num2;
console.log(miFuncion(2,10));

//clases

class Avenger2 implements IHeroe{
    nombre:string = "un avanger";

    constructor(nombre:string){
        this.nombre = nombre;
    }
}

let av2 = new Avenger2("Hulk");
console.log(av2.nombre);

//clase con atrib privado
class Avenger3{
    private _nombre:string = "un avenger";
    private _edad : number = 0;

    constructor(nombre:string, edad:number){
        this._nombre = nombre;
        this._edad = edad;
    }
    
    public get edad() : number {
        return this._edad
    }
    
    public set edad(edad : number) {
        this._edad = edad;
    }

    public mostrar = ()=>this._nombre;
    
}

let av3 = new Avenger3("Ironman", 30);
console.log("Clases 2: " + av3.mostrar());
av3.edad = 40;
console.log("Clases 2: " + av3.edad);

//Clases con metodos estaticos
class Xmen{
    static nombre_de_clase = "Xmen";
}
console.log("atributo estatico: " + Xmen.nombre_de_clase);

//Herencia

class AvengerHeredado extends Avenger2{

}

let avh = new AvengerHeredado("Heredado");
console.log(avh.nombre);

//Herencia 2

class AvengerHeredado2 extends Avenger2{
    edad: number = 0;
    constructor(nombre:string, edad:number){
        super(nombre);
        this.edad = edad;
    }
}

let ah2 : AvengerHeredado2 = new AvengerHeredado2("Heredado2", 44);
console.log("Heredado2: " + ah2.edad + " nombre: " + ah2.nombre);

//Namespace

namespace Funciones{
    export function f1(){
        console.log("Yo la f1");
    }

    export function f2(){
        console.log("Yo soy la f2");
    }
}

Funciones.f1();
Funciones.f2();

$(function(){
    console.log("ready");
})

