//Desestructuracion de objetos
//Asignacion desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
    rango: 'Soldado'
};

//const { nombre, edad, clave} = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

//console.log( persona.nombre );
//console.log( persona.nombre );

const useContext = ({ clave, nombre, edad, rango = 'Capitán'}) => {
    //console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 24.123,
            long: -12.123
        }
    }
};

const { nombreClave, anios, latlong: { lat, long } } = useContext( persona );
console.log( nombreClave, anios);
console.log( lat, long );

