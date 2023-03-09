
//Leer JSON con API fetch
const url = 'http://localhost:8000/'
const contenedorNoticias = document.getElementById("contenedorNoticias")
const tituloNoticia = document.getElementById("tituloNoticia")
const textoNoticia = document.getElementById("textoNoticia")
// Petición a la API
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(noticia => {
      const container = document.createElement('div');
      container.setAttribute("class", "container col-xxl-8 px-4 py-5")
    // hero noticia
      container.innerHTML = `
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="./img/${noticia.imagen}.jpeg" id="imagenNoticia" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3" id="tituloNoticia">${noticia.titulo}</h1>
          <div class="container d-flex justify-content-around">
          <p class="col-3 d-flex">Publicado: ${noticia.createdAt.slice(0,10)}</p>
          <p class="col-3 d-flex">Por: ${noticia.usuarioId}</p>
          <p class="col-3 d-flex">Categoría: ${noticia.categoriaId}</p>

          </div>
          <p class="lead" id="textoNoticia">${noticia.texto}</p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Like</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Dislike</button>
          </div>
        </div>
    </div>
      `
      contenedorNoticias.appendChild(container);
      const divider = document.createElement('div')
      divider.setAttribute("class", "b-example-divider")
      contenedorNoticias.appendChild(divider)      
    });
  })
  .catch(error => console.error(error));