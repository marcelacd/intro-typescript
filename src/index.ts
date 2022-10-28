/*
    ===== Código de TypeScript =====
*/

/*let nom: string = "Emily";
const eda: number = 5;

console.log( `Mi nombre es ${nom} y tengo ${eda + 1} años` );

let familia: Familia = {
    hija: "Emily",
    mama: "Marcela",
    animal: true,
}

console.log(`La hija se llama ${familia.hija}, la mama se llama ${familia.mama} y ${familia.animal} tienen animales`)

interface Familia {
    hija: string,
    mama: string,
    animal: boolean,
    del?: number
}

interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    dire: Direccio
}

interface Direccio {
    ciudad: string;
    calle: number;
}

let persona:Persona = {
    nombre: "Macela",
    apellido: "Carmona",
    edad: 25,
    dire: {
        ciudad: "Medellin",
        calle: 1234
    } 
}
*/
//console.log(persona.dire.ciudad)

let habilidades: string[];

interface Personaj {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaj: Personaj = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing']
}

personaj.puebloNatal = 'Pueblo Paleta';


console.log( personaj.habilidades[0] );

console.log("Hola")