import Router  from "express";
import CategoriaController from "../controllers/CategoriaController.js";
import { categoriaValidation } from "../middlewares/categoriaValidation.middleware.js";
const router = Router()

router.get("/", CategoriaController.listar)
router.post("/",categoriaValidation, CategoriaController.criar)
router.put("/:id",categoriaValidation, CategoriaController.atualizar)
router.delete("/:id", CategoriaController.deletar)


export default router
