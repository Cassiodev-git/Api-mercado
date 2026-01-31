import { Router } from "express";//responsavel por carregar as rotas 
import produtoRoute from "./produtoRoute.js"
import rootRoutes from './rootRoutes.js'


const router = Router()

router.use('/produtos', produtoRoute)
router.use('/produtos', produtoRoute)//voce passa a rota em si, e depois o controller que ficará responsavel por tratar os dados
router.use('/', rootRoutes)



export default router


