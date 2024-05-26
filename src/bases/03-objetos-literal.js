

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    diereccin: {
        ciudad: 'New Yorl',
        zip: 52160,
        lat: 64.123,
        lng: 34.123,
    },

};

//console.table( { persona } );
console.log( { persona } );

const persona2 = { ...persona};
persona2.nombre = 'Peter';

console.log(persona2);