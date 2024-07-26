import express from 'express'
import cors from 'cors'
import ciudadesRouter from './routes/ciudades.routes.js'
import sellRouter from './routes/ventas.routes.js'
const app = express()

const port = 3000
app.use(express.json());

app.listen(port, () =>{
    console.log(`Servidor levantado en puerto ${port}`)
})

app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))


app.use('/ciudades', ciudadesRouter)//Si dentro de la url origin(http://127.0.01:5501) se encuentra como primer directorio /ciudades
// entonces, lo redirijo a todos los endpoints de ciudades ubicados en './routes/ciudades.routes.js'



app.use('/ventas', sellRouter)