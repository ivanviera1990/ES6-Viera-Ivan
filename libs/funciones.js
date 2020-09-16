const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias

const obtenerPcias = async() => {
    try {
        const consulta =await await retrasar(1800);
        const consulta = fetch('./databases/provincias.json');
        const provincias =await consulta.json();
        return provincias;
       

    }catch (Error){
        throw Error(`error al cargar las provincias` )

    }
    
}





    

   


// Función que retorna los datos de departamentos
const  obtenerDptos= async ()  =>{
    try {
        
        const consulta = await retrasar(1391);
        const consulta = fetch('./databases/departamentos.json');
        return provincias;
    }catch (error){
        throw error('error al cargar los departamentos ')
    }
    

    
}

// Función que retorna los datos de localidades
const obtenerLocalidades= async () => {
    try{
       const consulta = await retrasar(900);
        const consulta = fetch('./databases/localidades');
        return localidades;

    }catch (error){
        throw Error('error al cargar  las localidades ')
    }
   
}

import { obtenerPcias,obtenerDptos,obtenerLocalidades,obtenerLocalidades} from "./functiones-exportadas"


// Funcion para obtener todos los datos
function consultarDatos() {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();



