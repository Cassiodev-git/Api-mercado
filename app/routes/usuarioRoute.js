import Router from "express";
import UsuarioController from "../controllers/UsuarioController.js";
import { usuarioValidation } from "../middlewares/usuarioValidation.middleware.js";

const router = Router()

router.get("/", UsuarioController.listar)
router.post("/",usuarioValidation, UsuarioController.cadastrar)

export default router