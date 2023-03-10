import express from 'express'
import database from './config/db.js'
import * as dotenv from 'dotenv'
dotenv.config()
import routerNoticias from './routes/routesNoticias.js'
import routerUsuarios from './routes/routesUsuarios.js'
import routerCategorias from './routes/routesCategorias.js'
import cors from 'cors'
import bodyParser from 'body-parser'

//declara el puerto, lo busca como variable de entorno o asigna el puerto p ej, 'process.env.PORT || 3000'
const PORT = process.env.PORT || 8000
const app = express()

// Conexión a la BD
try {
    await database.authenticate()
    console.log('Conexión establecida correctamente a la BBDD '+process.env.BD_NAME)
} catch (err) {
    console.log('Error al establecer la conexión', err)
}
// Sincronización de modelos con BD
try {
    await database.sync()
    console.log('Modelos sincronizados con éxito con la base de datos.')
} catch (err) {
    console.log('Error al sincronizar los modelos con la base de datos:', err)
}


// middlewares

// uso de cors
app.use(cors())

// habilitar requests en formato content-type  - application/json (entender los datos de los formularios)
app.use(bodyParser.json())

// habilitar requests en formato content-type - application/x-www-form-urlencoded
routerNoticias.use(express.urlencoded({extended: true}))
routerUsuarios.use(express.urlencoded({extended: true}))
routerCategorias.use(express.urlencoded({extended: true}))


// rutas
app.use(routerNoticias)
app.use(routerUsuarios)
app.use(routerCategorias)

// escuchar puerto
app.listen(PORT, function() {
    console.log(`Servidor escucuando en el puerto ${PORT}`)
})


