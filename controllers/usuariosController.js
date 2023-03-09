import Usuarios from "../models/Usuarios.js";

// consulta SELECT ALL para petición get
const getUsuarios = async (req, res) => {
    try {
        await Usuarios.findAll()
            .then(data => {
                res.status(200).json(data)
            })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al recuperar los usuarios.' });
    }

}

// consulta INSERT INTO para petición post
const postUsuario = async (req, res) => {
    // objeto que recibe data desde formulario
    const { nombre, correo, password, permiso } = req.body

    // envía data a tabla en models/Usuarios
    await Usuarios.create({
        nombre,
        correo,
        password,
        permiso
    })
    res.send('usuario creado correctamente')
}

export { getUsuarios, postUsuario }