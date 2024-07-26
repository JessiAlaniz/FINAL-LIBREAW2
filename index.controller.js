import { card } from './components/card.js'
import { navbar } from './components/navbar.js'
import { allciudades } from './api/ciudades.api.js'
const cardContainer = document.getElementById('cardContainer')
const header = document.getElementById('header')
header.innerHTML = navbar()
document.addEventListener('DOMContentLoaded', async()=>{
  
    const data = await allciudades(); //JSON con todas las ciudades
    cardContainer.innerHTML = ''
    

    //recorre arreglo para generar las card dinamicamente
    data.forEach((data) => {
        cardContainer.innerHTML += card(data.city, data.desc, data.price, data.id, data.img)
    })

    //SE HACE CLICK EN EL BOTON VER MAS
    const btnCity = document.getElementsByName('btnCity')
    Array.from(btnCity).forEach(button => {
        button.addEventListener('click', (e) => {
            const city = JSON.parse(e.target.dataset.city)

            //GUARDO EN EL LOCALSTORAGE EL ID DE LA CIUDAD
            localStorage.setItem('selectedCity', JSON.stringify(city))
            //REDIRIJO A LA OTRA PAGINA
            window.location.href = './pages/info'
        })
    })
})

