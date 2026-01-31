import express from 'express'
import { connection } from './config/db.js'
import './models/Produto.js'
import router from './routes/index.js'

const app = express()

app.use(express.json())

async function startServer() {
    try{
        await connection.authenticate()//autentica a servidor
        await connection.sync({force: false})//sincroniza com o banco criando o model
        app.use(router)
        app.listen(4000)

    }catch(erro){
        console.log("Erro ao iniciar a API", erro)
    }
}


startServer()