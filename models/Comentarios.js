import { DataTypes } from 'sequelize'
import database from '../config/db.js'
import Usuarios from './Usuarios.js'
import Noticias from './Noticias.js'

const Comentarios = database.define('comentarios', {
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    texto: {
        type: DataTypes.STRING(280),
        allowNull: false
    }
}, {    
    timestamps: true 
});

Comentarios.belongsTo(Noticias, { foreignKey: 'noticiaId'}); // un comentario pertenece a una noticia
Comentarios.belongsTo(Usuarios, { foreignKey: 'usuarioId'}); // un comentario pertenece a un usuario

export default Comentarios