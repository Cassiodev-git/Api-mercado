import UsuarioRepository from "../repositories/UsuarioRepository.js"
import AutenticaService from "../services/AutenticaService.js"


class UsuarioController {
    async listar(req, res){
        try{
            const usuarios = await UsuarioRepository.listar()
            return res.status(200).json(usuarios)
        }catch(erro){
            return res.status(500).json({erro: "Não foi possível recuperar os usuarios"})
        }
    }
    async cadastrar (req, res){
        try{
            await AutenticaService.cadastra(req.body)
            return res.status(201).json({mensagem: "Usuário cadastrado com sucesso!"})
        }catch(erro){
            return res.status(400).json({erro: erro})
        }

    }

}
export default new UsuarioController()