import express from "express";
import clienteRouter from './routes/clientes.routes.js' 


const app= express()

app.use(express.json())
app.use('/api',clienteRouter)

export default app
