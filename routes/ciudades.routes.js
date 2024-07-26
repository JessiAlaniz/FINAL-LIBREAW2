import {readFile} from 'fs/promises'; // funcion para poder leer archivos 
//funcion de express paara crear rutas y poder exportarlas
import { Router } from 'express';


const router = Router()

//lee y trae el archivo
const fileCiudades = await readFile('./data/ciudades.json','utf-8')
//lo convierte en JSON
const dataCiudades = JSON.parse(fileCiudades)

//SEGUNDO DIRECTORIO DONDE SE REALIZA LA PETICION. Se lee despues de leer el primer directorio que esta en index /ciudades/
router.get('/allciudades/', async(req, res) => {
    try{
        const result = await dataCiudades
        res.status(200).json(result)

    }catch(error){
        res.status(500).json('Error en el servidor: ' + error.message);

    }

}

)

export default router;