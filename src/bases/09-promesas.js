//Promesas
//

import { getHeroesById } from "./bases/08-imp-exp";
/*
const promesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
        //tarea 
        //importen el 
        const heroe = getHeroesById(2);
        resolve( heroe );
        //reject('No se pudo encontrar el héroe');
    }, 2000);
});

promesa.then( (heroe) => {
    console.log('heroe', heroe);
})
.catch( err => console.warn( err ) );
*/

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            //tarea 
            //importen el 
            const p1 = getHeroesById( id );
            if (p1){
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });
}


getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );
