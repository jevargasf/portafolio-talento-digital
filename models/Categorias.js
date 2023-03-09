import { DataTypes } from 'sequelize'
import database from '../config/db.js'

const Categorias = database.define('categorias', {
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre : {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {    
    timestamps: false 
});

export default Categorias