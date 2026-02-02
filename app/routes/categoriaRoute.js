import Router  from "express";
import { listar, cadastra } from "../controllers/CategoriaController.js";

const router = Router()

router.get("/", listar)
router.post("/", cadastra)


export default router
