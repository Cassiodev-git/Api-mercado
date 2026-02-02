import { DataTypes } from "sequelize";
import { connection } from "../config/db.js";
import Categoria from "./Categoria.js";

const Produto = connection.define("Produto", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model:'Categorias',
            key: 'id'
        }
    }
})
export default Produto