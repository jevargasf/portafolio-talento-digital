import Categorias from "../models/Categorias.js"

// consulta SELECT ALL para petición get
const getCategorias = (req, res) => {
    Categorias.findAll()
        .then(data => {
            console.log(res.json(data))
//            res.send('listando todas las categorias')
        })
}

// consulta INSERT INTO para petición post
const postCategoria = async (req, res) => {
    // objeto que recibe data desde formulario
    const { nombre } = req.body

    // envía data a tabla en models/categorias
    await Categorias.create({
        nombre
    })

    res.send('categoría creada correctamente')
}



export { getCategorias, postCategoria }