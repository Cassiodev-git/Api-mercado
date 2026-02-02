import CategoriaRepository from "../repositories/CategoriaRepository.js"

class CategoriaController{
    async listar(req, res){
        try{
            const categorias = await CategoriaRepository.listar()
            return res.status(200).json(categorias)
        }catch(erro){
            return res.status(500).json({Erro: 'Problemas ao recuperas os dados'})

        }
    }
    async criar(req, res){
        try{
            const novaCategoria = await CategoriaRepository.criar(req.body)
            return res.status(201).json(novaCategoria)
        }catch(erro){
            return res.status(500).json({Erro: 'Problemas ao criar dados'})
        }
    }
    async atualizar(req, res){
        try{
            const {id} = req.params
            await CategoriaRepository.atualizar(id, req.body)
            return res.status(200).json({mensagen: "Produto atualizado com sucesso"})
        }catch(erro){
            return res.status(500).json({Erro: "Erro ao atualizar"})
        }
    }
    async deletar(req, res){
        try{
            const {id} = req.params
            await CategoriaRepository.deletar(id)
            return res.status(200).json({mensagen: "Produto deletado"})
        }catch(erro){
            return res.status(500).json({Erro: "Erro ao deletar"})
        }
    }

}

export default new CategoriaController()