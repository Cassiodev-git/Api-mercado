import { Router } from "express";
import CarrinhoController from '../controllers/CarrinhoController.js';
import { autenticarMiddleware } from "../middlewares/autenticarUsuarioValidation.middleware.js";

const router = Router()

router.get("/",autenticarMiddleware, CarrinhoController.listar)
router.post("/",autenticarMiddleware, CarrinhoController.cadastrar)
router.put("/",autenticarMiddleware, CarrinhoController.atualizarQuantidade)
router.delete("/:id",autenticarMiddleware, CarrinhoController.remover)

export default router