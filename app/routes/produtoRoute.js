import Router from 'express'
import ProdutoController from '../controllers/ProdutoController.js' 
import { produtoValidation } from '../middlewares/produtoValidation.middleware.js'
const router = Router()

router.get("/", ProdutoController.listar)
router.post("/",produtoValidation, ProdutoController.cadastrar)
router.put("/:id",produtoValidation, ProdutoController.atualizar)
router.delete("/:id", ProdutoController.deletar)



export default router