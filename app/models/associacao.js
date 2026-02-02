import Categoria from "./Categoria.js";
import Produto from "./Produto.js";

Produto.belongsTo(Categoria, {
    foreignKey: 'categoriaId'
})

Categoria.hasMany(Produto, {
    foreignKey: 'categoriaId'
})