import Produto from "../models/Produto.js"


export const listar = async (req, res) => {
    try{
        const Produtos = await Produto.findAll()//retorna a lista de produtos do banco
        return res.json(Produtos)

    }catch(erro){
        return res.status(500).json({ Erro: 'Erro ao recuperar lista de produtos'})

    }
} 
export const cadastrar = async (req, res) =>{
    try{
        const novoProduto = await Produto.create(req.body)
        return res.status(200).json(novoProduto)
    }catch(erro){
        return res.status(500).json({erro:'Erro ao cadastrar novo produto'})
    }
}
