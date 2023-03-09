import { DataTypes } from 'sequelize'
import database from '../config/db.js'

const Usuarios = database.define('usuarios', {
    //estructura de la tabla
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100)
    },
    correo: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(100)
    },
    permiso: {
        type: DataTypes.STRING(20)
    }
}, {
    timestamps: true 
});

export default Usuarios