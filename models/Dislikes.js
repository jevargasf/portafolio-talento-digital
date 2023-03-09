import { DataTypes } from 'sequelize'
import database from '../config/db.js'
import Usuarios from './Usuarios.js'
import Noticias from './Noticias.js'

const Dislikes = database.define('dislikes', {
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {    
    timestamps: true 
});

Dislikes.belongsTo(Noticias, { foreignKey: 'noticiaId'}); // un dislike pertenece a una noticia
Dislikes.belongsTo(Usuarios, { foreignKey: 'usuarioId'}); // un dislike pertenece a un usuario

export default Dislikes