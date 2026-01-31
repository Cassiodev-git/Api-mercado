import {Router} from 'express'

const router = Router()

const response = {
    status: 'success',
    boasVindas: 'Olá seja bem vindo a api de mercado'
}
router.get('/', (req, res) => {
    return res.status(200).json(response)
})

export default router