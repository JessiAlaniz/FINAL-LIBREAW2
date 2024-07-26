import { navbar } from "../../components/navbar.js"
import { totalVentas } from '../../api/ordenDeCompra.api.js'
const btnCancel = document.getElementById('btnCancel')
const btnTravel = document.getElementById('btnTravel')

document.addEventListener('DOMContentLoaded', async()=>{
    const summary = JSON.parse(localStorage.getItem('summary'))
    const header = document.getElementById('header')
    header.innerHTML = navbar()

    //Este codigo puede variar dependiendo de como se maneje la informacion del localStorage
    document.getElementById('city').value = summary.city.city
    document.getElementById('hotel').value = summary.hotel
    document.getElementById('cant').value = summary.cant
    document.getElementById('days').value = summary.days
    document.getElementById('total').value = summary.total
})

btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    window.location.href = '../info'
})

btnTravel.addEventListener('click', async () => {

    const nombre =  document.getElementById('name').value 
   const apellido =  document.getElementById('lastName').value 
    const email = document.getElementById('email').value 
    const telefono = document.getElementById('tel').value 
   const destino = document.getElementById('city').value 
    const hotel = document.getElementById('hotel').value 
  const huespedes =  document.getElementById('cant').value 
   const dias =  document.getElementById('days').value
   const total=  document.getElementById('total').value 


    await totalVentas(nombre,apellido,telefono,email,destino,hotel,huespedes,dias,total)
    window.location.href = '../info/index.html'
    alert('Compra realizada exitosamente')
    
    
})


