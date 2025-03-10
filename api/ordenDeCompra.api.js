import { API } from './api.JS';


export const totalVentas = async(nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total) =>{
    try {
        const res = await fetch(`${API}/ventas/nuevaventa/`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({nombre, apellido, telefono, email, destino, hotel, huespedes, dias, total})
        })

        return res.json()
    } catch (error) {
        console.log(error)
        return {status:false}
    }
}

