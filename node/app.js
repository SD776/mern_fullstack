import express  from "express"
import cors from 'cors'
//importamos la conexión a la DB
import db from "./database/db.js"
//importamos nuestro enrutador
import blogRoutes from './routes/routes.js'
import reporteRoutes from './routes/reportesRutas.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/administrador', blogRoutes)
app.use('/reporte', reporteRoutes)

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})