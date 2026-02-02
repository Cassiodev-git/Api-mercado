import Categoria from "../models/Categoria.js"

export const listar = async (req, res) => {
    try{
        const categorias = await Categoria.findAll()
        return res.json(categorias)
    }catch(erro){
        return res.status(500).json({Erro: 'Erro ao listar as categorias'})
    }
}
export const cadastra = async (req, res) => {
    try{
        const novaCategoria = await Categoria.create(req.body)
        return res.status(201).json(novaCategoria)
    }catch(erro){
        return res.status(500).json({Erro: 'Erro ao cadastra uma nova categoria'})
    }
}
