//Funciones en JS

const saludar = function ( nombre ){
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola mundo`;

console.log( saludar2( 'Jon' ) );
console.log( saludar3( 'Emi' ) );
console.log( saludar4( 'Emi' ) );


const getUser = () => ({
    uId: 'ABC123',
    userName: 'El_Papi_Jon',
});

const user = getUser();
console.log(user);

//Tarea
//1. Transformen a una funcion de flecha
//2. Tiene que retonar un objeto implicito
//3. Pruebas
function getUsuaerioActivo( nombre ){
    return{
        uId: 'ABC123',
        userName: nombre
    }
}

const usuarioActivo = getUsuaerioActivo('Jonhatan');
console.log( usuarioActivo );
//handsOn
const getActiveUser = ( nombre ) => ({
    uId: 'ABC123',
    userName: nombre
});

const user1 = getActiveUser();
console.log(user1);
