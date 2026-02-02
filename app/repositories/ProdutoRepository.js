import Produto from "../models/Produto.js";
import Categoria from "../models/Categoria.js";


class ProdutoRepository{
    async listar(){
        return Produto.findAll({
            include: Categoria
        })
    }
    //Recupera os dados de acordo com os dados do controller
    async criar(dados){
        return Produto.create(dados)
    }
    async atualizar(id, dados){
        return Produto.update(dados, {
            where: {id}
        })
    }
    async deletar(id){
        return Produto.destroy({
            where: {id}
        })
    }

}

export default new ProdutoRepository()