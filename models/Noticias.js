import { DataTypes } from 'sequelize'
import database from '../config/db.js'
import Usuarios from './Usuarios.js'
import Categorias from './Categorias.js';

const Noticias = database.define('noticias', {
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    texto: {
        type: DataTypes.STRING(4000),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(200)
    }
}, {
    timestamps: true 
});

// Relación con el resto de modelos
Noticias.belongsTo(Usuarios, { foreignKey: 'usuarioId'}); // una noticia pertenece a un usuario
Noticias.belongsTo(Categorias, { foreignKey: 'categoriaId'}); // una noticia pertenece a una categoría

export default Noticias