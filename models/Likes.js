import { DataTypes } from 'sequelize'
import database from '../config/db.js'
import Usuarios from './Usuarios.js'
import Noticias from './Noticias.js'

const Likes = database.define('likes', {
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

Likes.belongsTo(Noticias, { foreignKey: 'noticiaId'}); // un like pertenece a una noticia
Likes.belongsTo(Usuarios, { foreignKey: 'usuarioId'}); // un like pertenece a un usuario

export default Likes