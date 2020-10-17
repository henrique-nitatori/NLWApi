import  'express-async-errors'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import path from 'path'
import errorHandler from './errors/Handler'


import './database/connection'
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)


app.listen(3333, () => {console.log('Servidor iniciado')})