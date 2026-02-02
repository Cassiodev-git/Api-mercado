import ProdutoRepository from "../repositories/ProdutoRepository.js"

class ProdutoController{
    async listar(req, res){
        
        try{
            const produtos = await ProdutoRepository.listar()
            return res.status(200).json(produtos)
        }catch(erro){
            return res.status(500).json({Erro:'Não foi possível recuperar os produtos'})
        }
    }
    async cadastrar(req, res){
        
        try{
            const novoProduto = await ProdutoRepository.criar(req.body)
            return res.status(201).json(novoProduto)
        }catch(erro){
            return res.status(500).json({Erro:'Problemas ao criar dados'})
        }
    }
    async atualizar(req, res){
        try{
            const {id} = req.params
            await ProdutoRepository.atualizar(id, req.body)
            return res.json({mensagen: "Produto atualizado com sucesso"})
        }catch(erro){
            return res.status(500).json({Erro: "Erro ao atualizar"})        }
    }
    async deletar(req, res){
        try{
            const {id} = req.params
            await ProdutoRepository.deletar(id)
            return res.status(200).json({mensagen: "Produto deletado"})
        }catch(erro){
            return res.status(500).json({Erro: "Erro ao deletar"})
        }
    }
}
export default new ProdutoController()