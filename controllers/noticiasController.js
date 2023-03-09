import Noticias from '../models/Noticias.js'

// consulta SELECT ALL para petición get
const getNoticias = (req, res) => {
    Noticias.findAll()
        .then(data => {
            console.log(res.json(data))
           // res.send('listando todas las noticias')
        })
}

// consulta INSERT INTO para petición post
const postNoticia = async (req, res) => {
    // objeto que recibe data desde formulario
   const { titulo, texto, imagen, usuarioId, categoriaId } = req.body

    // envía data a tabla en models/noticias
    await Noticias.create({
        titulo,
        texto,
        imagen,
        usuarioId,
        categoriaId
    })
    res.send('noticia creada correctamente')
    //res.render('exito.ejs', { mensaje: 'usuario creado correctamente'})
}



export { getNoticias, postNoticia }