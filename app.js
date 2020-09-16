

import { obtenerPcias, obtenerLocalidades, obtenerDptos } from './libs/functiones-exportadas.js';



const consultarDatos = async () => {

    try {
        const provincias = await obtenerPcias();
        const dptos = await obtenerDptos();
        const localidades = await obtenerLocalidades();

        console.log(provincias);
        console.log(dptos);
        console.log(localidades);
    } catch (error) {
        console.error( error );
    }

}

consultarDatos();

// obtenerPcias()
//     .then(pcias => {
//         console.log(pcias)
//         return obtenerDptos()
//     })
//     .then(dptos => {
//         console.log(dptos)
//         return obtenerLocalidades()
//     })
//     .then(localidades => {
//         console.log(localidades)
//     })
//     .catch(console.log)
//     .finally(() => console.log('Proceso finalizado'));




