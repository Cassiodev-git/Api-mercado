import { Router } from "express";//responsavel por carregar as rotas 
import produtoRoute from "./produtoRoute.js"
import categoriaRoute from "./categoriaRoute.js"
import rootRoutes from './rootRoutes.js'
import usuarioRoute from './usuarioRoute.js'

const router = Router()
//voce passa a rota em si, e depois o controller que ficará responsavel por tratar os dados
router.use('/produto', produtoRoute)
router.use('/produto', produtoRoute)
router.use('/categoria',categoriaRoute)
router.use('/categoria',categoriaRoute)
router.use('/usuario',usuarioRoute)
router.use('/usuario',usuarioRoute)
router.use('/', rootRoutes)



export default router


