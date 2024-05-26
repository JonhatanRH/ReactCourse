//Desestructuracion de objetos
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

const { nombre, edad, clave} = persona;

console.log( nombre );
console.log( edad );
console.log( clave );

//console.log( persona.nombre );
//console.log( persona.nombre );

const retornaPersona = ( usuario ) => {
    console.log( usuario );
};

retornaPersona( persona );


//6.00 min
