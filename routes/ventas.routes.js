import {readFile, writeFile} from 'fs/promises';
import { Router } from 'express';


const router = Router()

//lee y trae el archivo
const fileVentas = await readFile('./data/ventas.json','utf-8')
//lo convierte en JSON
const dataVentas = JSON.parse(fileVentas)

//SEGUNDO DIRECTORIO DONDE SE REALIZA LA PETICION. Se lee despues de leer el primer directorio que esta en index /ciudades/
router.post('/nuevaventa/', async(req, res) => {
    try{
        const {nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total} = req.body

        dataVentas.push({nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total})
        await writeFile('./data/ventas.json', JSON.stringify(dataVentas, null, 2), 'utf-8');

        res.status(200).json('Venta cargada correctamente')
        

    }catch(error){
        res.status(500).json('Error en el servidor: ' + error.message);

    }

}

)

export default router;
