import Router from 'express'
import ProdutoController from '../controllers/ProdutoController.js' 
const router = Router()

router.get("/",ProdutoController.listar)
router.post("/",ProdutoController.cadastrar)
router.put("/:id", ProdutoController.atualizar)
router.delete("/:id", ProdutoController.deletar)



export default router