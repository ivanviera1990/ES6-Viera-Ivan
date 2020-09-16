

export const obtenerPcias = async () => {
    try {
        const consulta = await fetch('./databases/provincias.json');
        const pcias = await consulta.json();
        return pcias
    } catch (error) {
        throw Error('Error al cargar las provincias')
    }
}

export const obtenerDptos = async () => {
    const consulta = await fetch('./databases/departamentos.json');
    const dptos = await consulta.json();
    return dptos
}

export const obtenerLocalidades = async () => {
    const consulta = await fetch('./databases/localidades.json');
    const localidades = await consulta.json();
    return localidades
}


// module.exports = {
//     async obtenerPcias (){
//         const consulta = await (await fetch('./databases/provincias.json'));
//         const pcias = await consulta.json();
//         return pcias
//     },
//     async obtenerDptos (){
//         const consulta = await fetch('./databases/departamentos.json');
//         const dptos = await consulta.json();
//         return dptos
//     },
//     async obtenerLocalidades() {
//         const consulta = await fetch('./databases/localidades.json');
//         const localidades = await consulta.json();
//         return localidades
//     }
// }






